import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { VisitContext } from "../../contexts/VisitContext";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { Proxy } from "../../consts/Proxy";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function OfficeId() {
  const { isLogged, setIsLogged } = useContext(VisitContext);
  const route = useRoute();
  const { newPatient } = route.params;
  const navigation = useNavigation();

  const login = async () => {
    try {
      const response = await fetch(`${Proxy}/api/patients/auth`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: newPatient.email,
          password: newPatient.password,
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

  const handleCodeEnter = async (code) => {
    try {
      const response = await fetch(`${Proxy}/api/patients/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ patient: newPatient, officeId: code }),
      });
      console.log("status register", response.status);

      if (response.status === 200) {
        await login();
      } else {
        navigation.navigate("Register");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.text}>Wpisz kod gabinetu</Text>
      <OTPInputView
        style={{ width: 300, height: 200 }}
        pinCount={4}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => {
          handleCodeEnter(code);
        }}
      />
    </SafeAreaView>
  );
}

const themeColor = "#5856D6";

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    textAlign: "center",
    padding: 20,
    marginTop: 20,
  },
  borderStyleBase: {
    width: 40,
    height: 50,
    color: themeColor,
  },

  borderStyleHighLighted: {
    borderColor: themeColor,
    color: themeColor,
  },

  underlineStyleBase: {
    width: 40,
    height: 50,
    borderWidth: 0,
    borderBottomWidth: 3,
    color: themeColor,
    borderColor: themeColor,
    borderBottomWidth: 3,
    fontSize: 38,
  },

  underlineStyleHighLighted: {
    borderColor: themeColor,
    color: themeColor,
  },
});
