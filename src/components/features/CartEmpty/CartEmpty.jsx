import { Box, Center, Text } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import CustomButton from "../../shared/button/Button";
import Colors from "../../../Colors";

function CartEmpty() {
  return (
    <Box flex={1} px={4} pb={10}>
      <Center h='90%'>
        <Center w={200} bg={Colors.white} rounded='full' h={200}>
          <FontAwesome name='shopping-basket' size={64} color={Colors.main} />
        </Center>
        <Text color={Colors.main} bold mt={5}>
          Cart is empty
        </Text>
      </Center>
      <CustomButton bg={Colors.black} color={Colors.white}>
        Start shopping
      </CustomButton>
    </Box>
  );
}

export default CartEmpty;
