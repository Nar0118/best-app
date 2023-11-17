import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Text,
  VStack,
} from "native-base";
import { Pressable } from "react-native";
import Colors from "../../../Colors";

function ProductItem({ product }) {
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
          <Center w='25%' bg={Colors.main}>
            <Image
              source={{
                uri: product?.img,
              }}
              alt={product?.img}
              w='full'
              h={24}
              resizeMode='contain'
            />
          </Center>
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
              5
            </Button>
          </Center>
        </HStack>
      </Box>
    </Pressable>
  );
}

export default ProductItem;
