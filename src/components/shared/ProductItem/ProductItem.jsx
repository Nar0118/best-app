import { Box, Button, Center, HStack, Image, Text, VStack } from "native-base";
import { Pressable, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../../Colors";

function ProductItem({ product }) {
  const navigation = useNavigation();

  return (
    <Pressable>
      <Box ml={6} mb={3}>
        <HStack
          alignItems='center'
          bg={Colors.white}
          shadow={1}
          rounded={10}
          overflow='hidden'
        >
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("Product", product);
            }}
            bg={Colors.main}
          >
            <Image
              source={{
                uri: product?.img,
              }}
              alt={product?.img}
              w='25%'
              h={24}
              resizeMode='contain'
            />
          </TouchableWithoutFeedback>
          <VStack w='60%' px={2}>
            <Text isTruncated color={Colors.black} bold fontSize={10}>
              {product?.name}
            </Text>
            <Text color={Colors.black} bold>
              {product?.price} AMD
            </Text>
          </VStack>
          <Center>
            <Button
              bg={Colors.main}
              _pressed={{
                bg: Colors.main,
              }}
              _text={{
                color: Colors.white,
              }}
            >
              {product?.quantity}
            </Button>
          </Center>
        </HStack>
      </Box>
    </Pressable>
  );
}

export default ProductItem;
