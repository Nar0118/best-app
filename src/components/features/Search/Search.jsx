import React, { useEffect, useState } from "react";
import { Box, HStack, Input, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../../../Colors";
import { fetchOneBasket } from "../../../http/deviceApi";

const Search = () => {
  const navigation = useNavigation();
  const [cart, setCart] = useState(0);

  const getCart = async () => {
    try {
      const cart = await fetchOneBasket();
      setCart(cart?.length ?? 0);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCart();
  });

  return (
    <HStack
      space={3}
      w='full'
      px={6}
      bg={Colors.main}
      py={4}
      alignItems='center'
      safeAreaTop
    >
      <Input
        placeholder='Nike, Puma, Adidas ...'
        w='85%'
        bg={Colors.white}
        typ='search'
        variant='filled'
        h={12}
        borderWidth={0}
        _focus={{
          bg: Colors.white,
        }}
      />
      <Pressable ml={3} onPress={() => navigation.navigate("Cart")}>
        <FontAwesome5 name='shopping-basket' size={24} color={Colors.white} />
        <Box
          px={1}
          rounded='full'
          position='absolute'
          top={-13}
          left={2}
          bg={Colors.red}
          _text={{
            color: Colors.white,
            fontSize: "11px",
          }}
        >
          {cart}
        </Box>
      </Pressable>
    </HStack>
  );
};

export default Search;
