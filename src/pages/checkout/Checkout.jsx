import React, { useEffect } from "react";
import { View, Text } from "react-native";
import CheckoutForm from "../../components/features/CheckoutForm/CheckoutForm";
import { fetchOneBasket } from "../../http/deviceApi";

const Checkout = () => {
  const getCheckoutData = async () => {
    try {
      const data = await fetchOneBasket();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCheckoutData();
  }, []);

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
      <CheckoutForm />
    </View>
  );
};

export default Checkout;
