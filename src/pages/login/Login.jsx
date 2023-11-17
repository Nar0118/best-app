import React from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import Colors from "../../Colors";

const Login = () => {
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
      <Box
        w='full'
        h='full'
        position='absolute'
        top='0'
        px='6'
        justifyContent='center'
        // bg={Colors.black}
      >
        <Heading>Login</Heading>
        <VStack space={6} pt='6'>
          <Input
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
            color: Colors.white
          }}
        >
          Login
        </Button>
        <Pressable mt={4}>
          <Text color='gray'>Sign up</Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default Login;
