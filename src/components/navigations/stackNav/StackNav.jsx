import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Checkout from "../../../pages/checkout/Checkout";
import Home from "../../../pages/home/Home";
import Product from "../../../pages/product/Product";
import Orders from "../../features/Orders/Orders";

const Stack = createNativeStackNavigator();
export default function StackNav() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Product' component={Product} />
      <Stack.Screen name='Orders' component={Orders} />
      <Stack.Screen name='Checkout' component={Checkout} />
    </Stack.Navigator>
  );
}
