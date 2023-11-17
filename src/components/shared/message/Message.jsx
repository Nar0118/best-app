import React from "react";
import { Center, Text } from "native-base";

const Message = ({ bg, color, children, size, bold, style }) => {
  return (
    <Center bg={bg} p={4} rounded={5} style={style}>
      <Text color={color} fontSize={size} bold={bold}>
        {children}
      </Text>
    </Center>
  );
};

export default Message;
