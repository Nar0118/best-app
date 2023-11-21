import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Contact from "../contact/Contact";
import { Box, Button, Center, HStack, Heading, ScrollView } from "native-base";
import CartEmpty from "../../components/features/CartEmpty/CartEmpty";
import Colors from "../../Colors";
import CartItems from "../../components/features/CartItems/CartItems";
import { useNavigation } from "@react-navigation/native";
import { fetchOneBasket } from "../../http/deviceApi";
import { Feather } from "@expo/vector-icons";

function Cart() {
  const navigation = useNavigation();
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const getCart = async () => {
      const cart = await fetchOneBasket(7);
      setCart(cart);
      if (cart?.length) {
        let total = 0;
        cart.forEach((datum) => {
          total += datum.quantity * datum.device.price;
        });
        setSubtotal(total);
      }
    };

    getCart();
  }, [navigation]);
  return (
    <Box flex={1} safeAreaTop bg={Colors.lightBlue}>
      <Center w='full' py={5}>
        <Heading color={Colors.black} fontSize={20} bold>
          Cart
        </Heading>
      </Center>
      {cart?.length ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <CartItems cart={cart} />
          {/* total */}
          <Center mt={5}>
            <HStack
              rounded={50}
              justifyContent='space-between'
              bg={Colors.white}
              shadow={2}
              w='90%'
              pl={5}
              h={45}
              alignItems='center'
            >
              <Text>Total</Text>
              <Button
                px={10}
                h={45}
                rounded={50}
                bg={Colors.main}
                _text={{
                  color: Colors.white,
                  fontWeight: "semibold",
                }}
                _pressed={{
                  bg: Colors.main,
                }}
              >
                {`${subtotal} AMD`}
              </Button>
            </HStack>
          </Center>

          {/* checkout */}

          <Center px={5}>
            <Button
              bg={Colors.black}
              color={Colors.white}
              mt={10}
              rounded={50}
              px={5}
              width='100%'
              mb={5}
              onPress={() => navigation.navigate("Checkout")}
            >
              Checkout
            </Button>
          </Center>
        </ScrollView>
      ) : (
        <CartEmpty />
      )}
    </Box>
  );
}

export default Cart;
