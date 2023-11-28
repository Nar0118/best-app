import React from "react";
import { Box, Center, Text } from "native-base";
import Colors from "../../Colors";

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
