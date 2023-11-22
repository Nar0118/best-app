import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import Colors from "../../Colors";
import { login } from "../../http/userApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await check();
        if (user?.id) {
          navigation.navigate("Bottom");
        }
      } catch (e) {
        navigation.navigate("Login");
        await AsyncStorage.removeItem("token");
      }
    };
    // checkAuth();
  }, [navigation]);

  const handleLogin = async () => {
    // navigation.navigate("Bottom"); // need to remove
    try {
      if (!email || !password) {
        alert("Please fill all fields!");
        return;
      }
      await login({ email, password });
      const token = await AsyncStorage.getItem("token");

      if (token) navigation.navigate("Bottom");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt='Logo'
        resizeMode='cover'
        size='lg'
        w='full'
        source={require("../../../assets/bg.png")}
      />
      <ScrollView
        w='full'
        h='full'
        position='absolute'
        top='0'
        px='6'
        // justifyContent='center'
        // bg={Colors.black}
      >
        <Heading color={Colors.white}>Login</Heading>
        <VStack space={6} pt='6'>
          <Input
            value={email}
            onChangeText={(text) => setEmail(text)}
            InputLeftElement={
              <MaterialIcons name='email' size={24} color={Colors.main} />
            }
            variant='underlined'
            placeholder='user@gmail.com'
            w='70%'
            color={Colors.main}
            borderBottomColor='gray'
            pl={2}
          />
          <Input
            value={password}
            onChangeText={(text) => setPassword(text)}
            InputLeftElement={
              <AntDesign name='eye' size={24} color={Colors.main} />
            }
            variant='underlined'
            placeholder='*******'
            w='70%'
            color={Colors.main}
            borderBottomColor='gray'
            pl={2}
          />
        </VStack>
        <Button
          my={30}
          w='40%'
          rounded={50}
          bg={Colors.main}
          _pressed={{
            bg: Colors.main,
          }}
          _text={{
            color: Colors.white,
          }}
          onPress={handleLogin}
        >
          Login
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Signup")}>
          <Text color={Colors.white}>Sign up</Text>
        </Pressable>
      </ScrollView>
    </Box>
  );
};

export default Login;
