import React from "react";
import { View, Text } from "react-native";
import Contact from "../contact/Contact";
import { Box, Button, Center, HStack, Heading, ScrollView } from "native-base";
import CartEmpty from "../../components/features/CartEmpty/CartEmpty";
import Colors from "../../Colors";
import CartItems from "../../components/features/CartItems/CartItems";

function Cart() {
  return (
    <Box flex={1} safeAreaTop bg={Colors.lightBlue}>
      <Center w='full' py={5}>
        <Heading color={Colors.black} fontSize={20} bold>
          Cart
        </Heading>
      </Center>
      {/* if cart is empty */}
      {/* <CartEmpty /> */}
      {/* else */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems />
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
              3560 AMD
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
          >
            Checkout
          </Button>
        </Center>
      </ScrollView>
    </Box>
  );
}

export default Cart;
