import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Center, Pressable, Text } from "native-base";
import { StyleSheet } from "react-native";
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Home from "../../../pages/home/Home";
import Colors from "../../../Colors";
import Profile from "../../../pages/profile/Profile";
import Cart from "../../../pages/cart/Cart";
import StackNav from "../stackNav/StackNav";
import Tabs from "../../features/Tabs/Tabs";

const Tab = createBottomTabNavigator();
const CustomTab = ({ children, onPress }) => (
  <Pressable
    onPress={onPress}
    h={70}
    w={70}
    rounded='full'
    bg={Colors.main}
    top={-30}
    shadow={2}
  >
    {children}
  </Pressable>
);

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      backBehavior='Main'
      initialRouteName='Main'
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tab },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name='Main'
        component={StackNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Entypo name='home' size={24} color={Colors.main} />
              ) : (
                <AntDesign name='home' size={24} color={Colors.black} />
              )}
            </Center>
          ),
        }}
      />
      <Tab.Screen
        name='Cart'
        component={Cart}
        options={{
          tabBarButton: (props) => <CustomTab {...props} />,
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome5
                  name='shopping-basket'
                  size={24}
                  color={Colors.white}
                />
              ) : (
                <MaterialCommunityIcons
                  name='shopping-outline'
                  size={24}
                  color={Colors.white}
                />
              )}
            </Center>
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Tabs}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Entypo name='user' size={24} color={Colors.main} />
              ) : (
                <AntDesign name='user' size={24} color={Colors.black} />
              )}
            </Center>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: Colors.white,
    height: 60,
  },
});
