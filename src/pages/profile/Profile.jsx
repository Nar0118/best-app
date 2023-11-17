import React from "react";
import { Box, Center, Heading, Image, ScrollView, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Colors";
import ProfileDetails from "../../components/features/profile/Profile";

const Profile = () => {
  // here should be user's image url(base:64)
  const image = "";

  return (
    <ScrollView>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Box p={7} bg={Colors.green} rounded={100}>
          {image ? (
            <Image
              source={{
                uri: image,
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
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          John Smith
        </Heading>
        <Text italic fontSize={15} color={Colors.white}>
          Joined Dec 12 2022
        </Text>
      </Center>
      <ProfileDetails />
    </ScrollView>
  );
};

export default Profile;
