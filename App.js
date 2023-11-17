import React from "react";
import { StyleSheet } from "react-native";
import { NativeBaseProvider, StatusBar } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "./src/components/features/Search/Search";
import Profile from "./src/pages/profile/Profile";
import Tabs from "./src/components/features/Tabs/Tabs";
import OrderView from "./src/pages/orderView/OrderView";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <NavigationContainer>
        <StatusBar hidden={true} />
        
      </NavigationContainer> */}
      <Search />
      <OrderView />
    </NativeBaseProvider>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Home'>
    //     <Stack.Screen name='Home' component={Home} />
    //     <Stack.Screen name='About' component={About} />
    //     <Stack.Screen name='Contact' component={Contact} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
