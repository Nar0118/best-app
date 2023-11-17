import React from "react";
import { View, Text } from "react-native";
import Contact from "../contact/Contact";

const Checkout = ({ navigation }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        height: "auto",
        overflow: "auto",
      }}
    >
      <Text
        style={{
          height: "auto",
          overflow: "auto",
        }}
      >
        checkout
      </Text>
      <Contact isHide={true} />
    </View>
  );
};

export default Checkout;
