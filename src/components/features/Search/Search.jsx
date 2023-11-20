import React, { useEffect } from "react";
import { Box, HStack, Input, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../../../Colors";
import { check } from "../../../http/userApi";
import { fetchOneBasket } from "../../../http/deviceApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Search = () => {
  const navigation = useNavigation();

  useEffect(() => {
    console.log(2222222222222222222222222);
    const checkAuth = async () => {
    console.log(555555555555555555);
    try {
    console.log(4533543);
    const user = await check();
    console.log(111111111111111);
    console.log('-----hgjghjhjg', user?.id);
        if (!user?.id) {
          navigation.navigate("Login");
          // await AsyncStorage.removeItem("token");
        }

        const cart = await fetchOneBasket(user?.id);
        console.log('==============================', cart);
      } catch (e) {
        navigation.navigate("Login");
        // await AsyncStorage.removeItem("token");
      }
    };
    checkAuth();
  }, []);

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
          5
        </Box>
      </Pressable>
    </HStack>
  );
};

export default Search;
