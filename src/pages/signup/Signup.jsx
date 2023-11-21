import React from "react";
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
import { MaterialIcons, AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../Colors";

const SignUp = () => {
  const navigation = useNavigation();

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
        top={0}
        px={6}
        mb={6}
        // justifyContent='center'
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
        <Pressable mt={4} onPress={() => navigation.navigate("Login")}>
          <Text color={Colors.white}>Login</Text>
        </Pressable>
      </ScrollView>
    </Box>
  );
};

export default SignUp;
