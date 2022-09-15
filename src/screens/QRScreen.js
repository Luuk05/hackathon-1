import { View, Text, Button } from "react-native";
import React from "react";
import NavBar from "../components/Navbar";
import QRCode from "react-native-qrcode-svg";
import { firebase } from "../../firebase.js";

const QRScreen = ({ navigation }) => {
  const userRef = firebase.firestore().collection("users");

  return (
    <View>
      <NavBar navigation={navigation} />
      <View
        style={{
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 5,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 20,
          borderRadius: 30,
          width: 300,
          height: 300,
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <QRCode size={250} value="https://google.com" />
      </View>
      <View
        style={{
          marginTop: 60,
          maxWidth: 250,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Personal Coach</Text>
        <Text>
          Maak een afspraak met onze personal coach Willem door hem te bellen op
          dit nummer: 06 123 456 78 of maak een praatje met hem tijdens het
          sporten.
        </Text>
      </View>
      <Text
        style={{
          color: "red",
          textDecorationLine: "underline",
          textAlign: "center",
          marginTop: 140,
        }}
        onPress={() => {}}
      >
        Annuleer abonnement
      </Text>
    </View>
  );
};

export default QRScreen;
