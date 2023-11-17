import React from "react";
import { Box, Center, Image, VStack } from "native-base";
import CustomButton from "../../components/shared/button/Button";
import Colors from "../../Colors";

const NoVerifyPage = () => {
  return (
    <Box bg={Colors.white} flex={1} justifyContent='center'>
      <Center>
        <Image
          source={require("../../../assets/logo.jpg")}
          alt='logo'
          size='lg'
          w='300'
        />
      </Center>
      <VStack space={6} px={5} alignItems='center' mt={10}>
        <CustomButton bg={Colors.black} color={Colors.white}>
          Sign up
        </CustomButton>
        <CustomButton bg={Colors.white} color={Colors.black}>
          Login
        </CustomButton>
      </VStack>
    </Box>
  );
};

export default NoVerifyPage;
