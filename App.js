import React from "react";
import { StyleSheet } from "react-native";
import { NativeBaseProvider, StatusBar } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "./src/components/features/Search/Search";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/pages/login/Login";
import SignUp from "./src/pages/signup/Signup";
import Orders from "./src/components/features/Orders/Orders";
import BottomNavigation from "./src/components/navigations/bottomNavigation/BottomNavigation";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* <StatusBar hidden={true} /> */}
        <Search />
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Signup' component={SignUp} />
          <Stack.Screen name='Order' component={Orders} />
          <Stack.Screen name='Bottom' component={BottomNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
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
