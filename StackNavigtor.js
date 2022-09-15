import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
// import QrScreen from "./src/screens/QrScreen";
import LoginScreen from "./src/screens/LoginScreen";
import useAuth from "./src/hooks/useAuth";
import QRScreen from "./src/screens/QRScreen";
import NavBar from "./src/components/Navbar";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { user } = useAuth();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="QRScreen" component={QRScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
