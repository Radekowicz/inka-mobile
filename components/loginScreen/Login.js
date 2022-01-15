import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { VisitContext } from "../../contexts/VisitContext";
import { Proxy } from "../../consts/Proxy";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const { isLogged, setIsLogged } = useContext(VisitContext);
  const [email, onChangeEmail] = useState();
  const [password, onChangePassword] = useState();
  const navigation = useNavigation();

  const handleLoginPress = async () => {
    try {
      const response = await fetch(`${Proxy}/api/patients/auth`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      console.log("status login", response.status);

      if (response.status === 200) {
        setIsLogged(true);
      } else {
        navigation.navigate("Login");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          autoCompleteType="email"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Hasło</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          autoCompleteType="password"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={{ color: "white", fontSize: 18 }}>Zaloguj</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const themeColor = "#5856D6";

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    textAlign: "center",
  },
  button: {
    borderRadius: 10,
    backgroundColor: themeColor,
    borderColor: themeColor,
    padding: 12,
    overflow: "hidden",
    marginTop: 50,
    alignItems: "center",
    width: Dimensions.get("window").width - 80,
  },
  inputContainer: {
    marginTop: 50,
    borderBottomWidth: 1,
  },
  input: {
    height: 40,
    width: Dimensions.get("window").width - 80,
    fontSize: 15,
  },
});
