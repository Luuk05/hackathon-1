import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.loginForm}>
        <Text style={{ marginBottom: 10 }}>
          Login om je QR code te kunnen scannen
        </Text>
        <TextInput
          style={styles.loginFields}
          placeholderTextColor="#00000050"
          placeholder="Gebruikersnaam"
          onChangeText={(value) => setUserName(value)}
          value={userName}
        />
        <TextInput
          style={styles.loginFields}
          placeholderTextColor="#00000050"
          placeholder="Wachtwoord"
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
          value={password}
        />
        <Pressable
          style={styles.loginButton}
          onPress={() => {
            // console.log("logging in..");
          }}
        >
          <Text style={styles.loginButtonText}>Log in</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    fontFamily: "Roboto",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  loginForm: {
    maxWidth: 260,
    display: "flex",
    flexDirection: "column",
  },

  loginFields: {
    borderColor: "black",
    borderWidth: 1,
    width: 260,
    padding: 12,
    marginBottom: 10,
    borderRadius: 10,
  },

  loginButton: {
    backgroundColor: "#4169E1",
    width: 260,
    padding: 14,
    borderRadius: 10,
  },

  loginButtonText: {
    width: "100%",
    textAlign: "center",
    color: "white",
  },
});
