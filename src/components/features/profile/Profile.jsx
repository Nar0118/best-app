import React from "react";
import { Box, FormControl, Input, ScrollView, VStack } from "native-base";
import Colors from "../../../Colors";
import CustomButton from "../../shared/button/Button";

const inputs = [
  {
    label: "First name",
    type: "text",
    placeholder: "John",
  },
  {
    label: "Last name",
    type: "text",
    placeholder: "Smith",
  },
  {
    label: "Avatar",
    type: "file",
    placeholder: "",
  },
  {
    label: "Email",
    type: "email",
    placeholder: "example@mail.ru",
  },
  {
    label: "Phone",
    type: "numeric",
    placeholder: "37499999999",
  },
  {
    label: "Address",
    type: "text",
    placeholder: "Yerevan, Amiryan str 12/4",
  },
  {
    label: "New password",
    type: "password",
    placeholder: "******",
  },
  {
    label: "Confirm password",
    type: "password",
    placeholder: "******",
  },
];

const ProfileDetails = () => {
  return (
    <Box h='full' bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false} mb={20}>
        <VStack space={10} mt={5} pb={10}>
          {inputs.map((e, i) => (
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
              />
            </FormControl>
          ))}
        </VStack>
        <CustomButton bg={Colors.main} color={Colors.white}>
          Update profile
        </CustomButton>
      </ScrollView>
    </Box>
  );
};

export default ProfileDetails;
