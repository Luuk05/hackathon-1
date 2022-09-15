import { View, Text, Button } from "react-native";
import React from "react";
import NavBar from "../components/Navbar";

const QRScreen = ({ navigation }) => {
  return (
    <View>
      <NavBar navigation={navigation} />
      <Text>QRScreen</Text>
      <Button
        title="Terug naar home"
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        Test
      </Button>
    </View>
  );
};

export default QRScreen;
