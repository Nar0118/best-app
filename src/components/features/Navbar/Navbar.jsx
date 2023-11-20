import React from "react";
import { View, Button, StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../../pages/home/Home";
import Contact from "../../../pages/contact/Contact";
import About from "../../../pages/about/About";
import BottomNavigation from "../../navigations/bottomNavigation/BottomNavigation";

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    columnGap: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    objectFit: "contain",
  },
});

const Navbar = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='About' component={About} />
      <Tab.Screen name='Contact' component={BottomNavigation} />
    </Tab.Navigator>
  );
};

export default Navbar;
