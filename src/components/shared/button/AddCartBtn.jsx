import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../../../Colors";
import { createBasket } from "../../../http/deviceApi";
import { check } from "../../../http/userApi";

const addToCart = async (id) => {
  try {
    const user = await check();
    await createBasket({
      deviceId: id,
      quantity: 1,
      userId: user?.id,
    });
    alert("Product has been successfully added in cart.");
  } catch (e) {
    console.error(e);
  }
};

const AddCartBtn = ({ id }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => addToCart(id)}>
      <Text style={styles.buttonText}>Add to cart</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    backgroundColor: "transparent",
    color: Colors.black,
    borderWidth: 1,
    borderColor: Colors.black,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: Colors.black,
    textAlign: "center",
  },
});

export default AddCartBtn;
