import { Box, Center, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import CustomButton from "../../shared/button/Button";
import Colors from "../../../Colors";

function CartEmpty({ title }) {
  const navigation = useNavigation();

  return (
    <Box flex={1} px={4} pb={10}>
      <Center h='90%'>
        <Center w={200} bg={Colors.white} rounded='full' h={200}>
          <FontAwesome name='shopping-basket' size={64} color={Colors.main} />
        </Center>
        <Text color={Colors.main} bold mt={5}>
          {title}
        </Text>
      </Center>
      <CustomButton
        bg={Colors.black}
        color={Colors.white}
        onPress={() => navigation.navigate("Home")}
      >
        Start shopping
      </CustomButton>
    </Box>
  );
}

export default CartEmpty;
