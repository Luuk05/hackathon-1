import { View, Text, Button } from "react-native";
import React from "react";

const RandomScreen = ({ navigation }) => {
  return (
    <View>
      <Text>RandomScreen</Text>
      <Button
        title="Random"
        onPress={() => {
          navigation.navigate("Home");
        }}
      ></Button>
    </View>
  );
};

export default RandomScreen;
