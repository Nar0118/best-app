import React, { useEffect, useState } from "react";
import { Box, Center, Heading, Image, ScrollView, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Colors";
import ProfileDetails from "../../components/features/ProfileDetails/ProfileDetails";
import { check } from "../../http/userApi";

const Profile = () => {
  const [user, setUser] = useState({});

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const getUser = async () => {
    try {
      const data = await check();
      const { avatar, ...rrr } = data;

      setUser(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <ScrollView>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Box p={user?.avatar ? 0 : 7} bg={Colors.green} rounded={100}>
          {user?.avatar ? (
            <Image
              rounded={100}
              source={{
                uri: user?.avatar,
              }}
              alt='profile'
              w={24}
              h={24}
              resizeMode='cover'
            />
          ) : (
            <AntDesign name='user' size={30} color={Colors.white} />
          )}
        </Box>
        {user && (
          <>
            <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
              {`${user?.first_name} ${user?.last_name}`}
            </Heading>
            <Text italic fontSize={15} color={Colors.white}>
              Joined{" "}
              {new Date(user?.createdAt).toLocaleDateString("en-US", options)}
            </Text>
          </>
        )}
      </Center>
      <ProfileDetails user={user} />
    </ScrollView>
  );
};

export default Profile;
