import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";
import Colors from "../../../Colors";
import { useEffect, useState } from "react";
import ProductItem from "../../shared/ProductItem/ProductItem";

const Swipe = ({ disableSwipe }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(
      "https://best-systems.onrender.com/api/device?page=1&limit=10&search=&typeId=undefined&brandId=undefined"
    );
    const result = await response.json();
    setProducts(result);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <SwipeListView
      rightOpenValue={-50}
      previewRowKey={0}
      previewOpenValue={-40}
      previewOpenDelay={3000}
      data={products}
      renderItem={renderItems}
      renderHiddenItem={renderHiddenItems}
      showsVerticalScrollIndicator={false}
      disableSwipe={disableSwipe}
    />
  );
};

// cart item
const renderItems = (data) => {
  return (
    <ProductItem
      product={{
        name: data.item.name,
        img: data.item.img,
        price: data.item.price,
      }}
    />

    // <Pressable>
    //   <Box ml={6} mb={3}>
    //     <HStack
    //       alignItems='center'
    //       bg={Colors.white}
    //       shadow={1}
    //       rounded={10}
    //       overflow='hidden'
    //     >
    //       <Center w='25%' bg={Colors.main}>
    //         <Image
    //           source={{
    //             uri: data.item.img,
    //           }}
    //           alt={data.item.img}
    //           w='full'
    //           h={24}
    //           resizeMode='contain'
    //         />
    //       </Center>
    //       <VStack w='60%' px={2}>
    //         <Text isTruncated color={Colors.black} bold fontSize={10}>
    //           {data.item.name}
    //         </Text>
    //         <Text color={Colors.black} bold>
    //           {data.item.price} AMD
    //         </Text>
    //       </VStack>
    //       <Center>
    //         <Button
    //           bg={Colors.main}
    //           _pressed={{
    //             bg: Colors.main,
    //           }}
    //           _text={{
    //             color: Colors.white,
    //           }}
    //         >
    //           5
    //         </Button>
    //       </Center>
    //     </HStack>
    //   </Box>
    // </Pressable>
  );
};

// hidden
const renderHiddenItems = () => {
  return (
    <Pressable
      w={50}
      roundedTopRight={10}
      roundedBottomRight={10}
      h='88%'
      ml='auto'
      justifyContent='center'
      bg={Colors.red}
    >
      <Center alignItems='center' space={2}>
        <FontAwesome name='trash' size={24} color={Colors.white} />
      </Center>
    </Pressable>
  );
};

function CartItems({ disableSwipe }) {
  return (
    <Box mr={6}>
      <Swipe disableSwipe={disableSwipe} />
    </Box>
  );
}

export default CartItems;
