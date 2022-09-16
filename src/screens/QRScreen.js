import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import NavBar from "../components/Navbar";
import QRCode from "react-native-qrcode-svg";
import { firebase } from "../../firebase.js";
import useAuth from "../hooks/useAuth";

const QRScreen = ({ navigation }) => {
  const userRef = firebase.firestore().collection("users");
  const { user } = useAuth();
  let [hasActiveSubscription, setHasActiveSubscription] = useState(null);

  userRef
    .doc(user.document)
    .get()
    .then((docRef) => {
      // console.log(docRef.data());
      if (docRef.data().hasActiveSubscription) {
        setHasActiveSubscription(true);
      } else {
        setHasActiveSubscription(false);
      }
    })
    .catch((error) => {
      console.log(error);
    });

  function schrijfUit() {
    userRef.doc(user.document).update({
      hasActiveSubscription: false,
    });
    setHasActiveSubscription(false);
  }

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
        {hasActiveSubscription ? (
          <QRCode size={250} value="https://google.com" />
        ) : (
          <Text style={{ textAlign: "center", maxWidth: 150 }}>
            Je hebt geen actief abonnement meer
          </Text>
        )}
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
        onPress={() => {
          schrijfUit();
        }}
      >
        Annuleer abonnement
      </Text>
    </View>
  );
};

export default QRScreen;
