import { View, Text } from "react-native";
import React from "react";

const NavBar = ({ navigation }) => {
  return (
    <View
      style={{
        height: 80,
        backgroundColor: "#fff",
        paddingTop: 15,
        color: "#000",
        display: "flex",
        flexDirection: "row",
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{ marginLeft: 20, marginRight: 20 }}
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        Cursussen
      </Text>
      <Text
        onPress={() => {
          navigation.navigate("QRScreen");
        }}
      >
        Mijn profiel
      </Text>
    </View>
  );
};

export default NavBar;
