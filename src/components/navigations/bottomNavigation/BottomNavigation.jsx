import { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Center, Pressable } from "native-base";
import { StyleSheet } from "react-native";
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Colors from "../../../Colors";
import Cart from "../../../pages/cart/Cart";
import StackNav from "../stackNav/StackNav";
import Tabs from "../../features/Tabs/Tabs";
import { check } from "../../../http/userApi";
import Login from "../../../pages/login/Login";

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
  const [isLogin, setIsLogin] = useState(null);

  const getUser = async () => {
    try {
      const user = await check();
      setIsLogin(user);
    } catch (e) {
      setIsLogin(null);
      console.error(e);
    }
  };

  useEffect(() => {
    getUser();
  });

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
      {isLogin ? (
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
      ) : (
        <Tab.Screen
          name='Login'
          component={Login}
          options={{
            tabBarIcon: ({ focused }) => (
              <Center>
                <AntDesign
                  name='login'
                  size={24}
                  color={focused ? Colors.main : Colors.black}
                />
              </Center>
            ),
          }}
        />
      )}
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
