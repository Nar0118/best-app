import { Box, Center, Pressable } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";
import Colors from "../../../Colors";
import ProductItem from "../../shared/ProductItem/ProductItem";
import { removeFromBasket } from "../../../http/deviceApi";

const Swipe = ({ cart }) => {
  return (
    <SwipeListView
      rightOpenValue={-50}
      previewRowKey={0}
      previewOpenValue={-40}
      previewOpenDelay={3000}
      data={cart}
      renderItem={renderItems}
      renderHiddenItem={renderHiddenItems}
      showsVerticalScrollIndicator={false}
    />
  );
};

// cart item
const renderItems = (data) => {
  return (
    <ProductItem
      product={{
        name: data?.item?.device?.name,
        img: data?.item?.device?.img,
        price: data?.item?.device?.price,
        quantity: data?.item?.quantity,
        id: data?.item?.deviceId,
      }}
    />
  );
};

// hidden
const renderHiddenItems = (data) => {
  return (
    <Pressable
      w={50}
      roundedTopRight={10}
      roundedBottomRight={10}
      h='88%'
      ml='auto'
      justifyContent='center'
      bg={Colors.red}
      onPress={async () => {
        await removeCartItem(data.item?.id);
      }}
    >
      <Center alignItems='center' space={2}>
        <FontAwesome name='trash' size={24} color={Colors.white} />
      </Center>
    </Pressable>
  );
};

function CartItems({ cart, remove }) {
  const removeCartItem = async (id) => {
    try {
      await removeFromBasket(id);
      remove(id);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box mr={6}>
      <SwipeListView
        rightOpenValue={-50}
        previewRowKey={0}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        data={cart}
        renderItem={(data) => (
          <ProductItem
            product={{
              name: data?.item?.device?.name,
              img: data?.item?.device?.img,
              price: data?.item?.device?.price,
              quantity: data?.item?.quantity,
              id: data?.item?.deviceId,
            }}
          />
        )}
        renderHiddenItem={(data) => (
          <Pressable
            w={50}
            roundedTopRight={10}
            roundedBottomRight={10}
            h='88%'
            ml='auto'
            justifyContent='center'
            bg={Colors.red}
            onPress={async () => {
              await removeCartItem(data.item?.id);
            }}
          >
            <Center alignItems='center' space={2}>
              <FontAwesome name='trash' size={24} color={Colors.white} />
            </Center>
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
}

export default CartItems;
