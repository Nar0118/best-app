import { useEffect, useState } from "react";
import {
  Button,
  Center,
  HStack,
  Heading,
  Modal,
  ScrollView,
  Text,
  VStack,
  View,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../../Colors";
import CustomButton from "../../components/shared/button/Button";
import ProductItem from "../../components/shared/ProductItem/ProductItem";

function OrderView() {
  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);

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
    <View p={5} bg={Colors.lightBlue} flex={1}>
      <Center shadow={4} rounded={10} bg={Colors.white} py={5}>
        <Center bg={Colors.main} rounded={100} p={5}>
          <FontAwesome5 name='shipping-fast' size={24} color={Colors.white} />
        </Center>
        <Text bold>Shipping info</Text>
        <Text>Shipping: Yerevan, Amiryan 23/1</Text>
        <Text>Payment method: Card</Text>
      </Center>
      <Heading mt={5}>Products</Heading>
      <ScrollView showsVerticalScrollIndicator={false}>
        {products?.map((e) => (
          <ProductItem product={e} key={e.id} />
        ))}
      </ScrollView>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)} size='lg'>
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              <HStack alignItems='center' justifyContent='space-between'>
                <Text fontWeight='medium'>Products</Text>
                <Text color={Colors.black} bold>
                  1232 AMD
                </Text>
              </HStack>
              <HStack alignItems='center' justifyContent='space-between'>
                <Text fontWeight='medium'>Shipping</Text>
                <Text color={Colors.black} bold>
                  1232 AMD
                </Text>
              </HStack>
              <HStack alignItems='center' justifyContent='space-between'>
                <Text fontWeight='medium'>Total Amount</Text>
                <Text color={Colors.main} bold>
                  1232 AMD
                </Text>
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex={1}
              bg={Colors.main}
              h={45}
              _text={{
                color: Colors.white,
              }}
              onPress={() => setOpenModal(false)}
              _pressed={{
                bg: Colors.main,
              }}
            >
              Place an order
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <CustomButton
        bg={Colors.black}
        color={Colors.white}
        onPress={() => setOpenModal(true)}
      >
        Show total
      </CustomButton>
    </View>
  );
}

export default OrderView;
