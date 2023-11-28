import React, { useEffect, useState } from "react";
import {
  Box,
  ScrollView,
  FormControl,
  Input,
  VStack,
  Image,
} from "native-base";
import Colors from "../../../Colors";
import CustomButton from "../../shared/button/Button";
import { update } from "../../../http/userApi";

const ProfileDetails = ({ user }) => {
  const [formValues, setFormValues] = useState({});
  const inputs = [
    {
      label: "First name",
      type: "text",
      placeholder: "John",
      value: user?.first_name,
    },
    {
      label: "Last name",
      type: "text",
      placeholder: "Smith",
      value: user?.last_name,
    },
    {
      label: "Avatar",
      type: "file",
      placeholder: "",
      value: user?.avatar,
    },
    {
      label: "Email",
      type: "email",
      placeholder: "example@mail.ru",
      value: user?.email,
    },
    {
      label: "Phone number",
      type: "numeric",
      placeholder: "37499999999",
      value: user?.phone_number,
    },
    {
      label: "Address",
      type: "text",
      placeholder: "Yerevan, Amiryan str 12/4",
      value: user?.address,
    },
    {
      label: "New password",
      type: "password",
      placeholder: "******",
      value: "",
    },
    {
      label: "Confirm password",
      type: "password",
      placeholder: "******",
      value: "",
    },
  ];

  useEffect(() => {
    const initialFormValues = inputs?.reduce((acc, input) => {
      acc[input.label.replace(" ", "_").toLocaleLowerCase()] =
        input.value || "";
      return acc;
    }, {});
    

    setFormValues(initialFormValues);
  }, []);

  const handleInputChange = (label, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [label]: value,
    }));
  };

  const onSubmit = async (values) => {
    try {
      await update({ ...formValues });

      alert("Account details has been successfully updated!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box h='full' bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false} mb={20}>
        <VStack space={10} mt={5} pb={10}>
          {inputs.map((e, i) =>
            e.label === "Avatar" ? (
              <Image
                source={{
                  uri: e.value,
                }}
                alt={e.value}
                w={24}
                h={24}
              />
            ) : (
              <FormControl key={i}>
                <FormControl.Label
                  _text={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: Colors.black,
                  }}
                >
                  {e.label}
                </FormControl.Label>
                <Input
                  placeholder={e?.placeholder ?? ""}
                  keyboardType={e.type}
                  borderColor={Colors.main}
                  borderWidth={1}
                  bg='blue'
                  py={4}
                  type={e.type}
                  color={Colors.main}
                  fontSize={15}
                  _focus={{
                    bg: "blue",
                  }}
                  defaultValue={e.value}
                  onChangeText={(text) => handleInputChange(e.label, text)}
                />
              </FormControl>
            )
          )}
        </VStack>
        <CustomButton
          bg={Colors.main}
          color={Colors.white}
          onPress={() => {
            onSubmit();
          }}
        >
          Update profile
        </CustomButton>
      </ScrollView>
    </Box>
  );
};

export default ProfileDetails;
