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
import { MaterialIcons, AntDesign, Entypo, Feather } from "@expo/vector-icons";
import Colors from "../../Colors";

const SignUp = () => {
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
      >
        <Heading color={Colors.main}>Sign up</Heading>
        <VStack space={6} pt='6'>
          {/* first_name */}
          <Input
            InputLeftElement={
              <AntDesign name='user' size={24} color={Colors.main} />
            }
            variant='underlined'
            placeholder='John'
            w='70%'
            color={Colors.main}
            borderBottomColor='gray'
            pl={2}
          />
          {/* last_name */}

          <Input
            InputLeftElement={
              <Feather name='user' size={24} color={Colors.main} />
            }
            variant='underlined'
            placeholder='Smith'
            w='70%'
            color={Colors.main}
            borderBottomColor='gray'
            pl={2}
          />

          {/* email */}
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

          {/* phone */}
          <Input
            InputLeftElement={
              <Entypo name='phone' size={24} color={Colors.main} />
            }
            variant='underlined'
            placeholder='+374999999'
            w='70%'
            color={Colors.main}
            borderBottomColor='gray'
            pl={2}
          />

          {/* address */}
          <Input
            InputLeftElement={
              <Entypo name='address' size={24} color={Colors.main} />
            }
            variant='underlined'
            placeholder='Yerevan, Baghramyan 26'
            w='70%'
            color={Colors.main}
            borderBottomColor='gray'
            pl={2}
          />

          {/* password */}
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

          {/* password confirm */}
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
            color: Colors.white,
          }}
        >
          Sign up
        </Button>
        <Pressable mt={4}>
          <Text color='gray'>Login</Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default SignUp;
