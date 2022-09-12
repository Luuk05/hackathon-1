import { View, Text, Button } from "react-native";
import React from "react";

const RandomScreen = ({ navigation }) => {
  return (
    <View>
      <Text>RandomScreen</Text>
      <Button
        title="Random"
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      ></Button>
    </View>
  );
};

export default RandomScreen;
