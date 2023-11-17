import React from "react";
import { Box, Center, Heading, Image, ScrollView, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Colors";
import ProfileDetails from "../../components/features/profile/Profile";

const Shipping = () => {
  return (
    <Box p={7} flex={1} safeAreaTop bg={Colors.main} py={5}>
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          Delivery
        </Text>
      </Center>
      <Box h='full' bg={Colors.white} px={5}></Box>
    </Box>
  );
};

export default Shipping;
