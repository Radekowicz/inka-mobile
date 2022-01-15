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
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const { isLogged, setIsLogged } = useContext(VisitContext);

  const [firstName, onChangeFirstName] = useState();
  const [lastName, onChangeLastName] = useState();
  const [email, onChangeEmail] = useState();
  const [password, onChangePassword] = useState();

  const navigation = useNavigation();

  const handleRegisterPress = async () => {
    const newPatient = {
      firstName,
      lastName,
      email,
      password,
    };
    navigation.navigate("OfficeId", {
      newPatient,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Imię</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeFirstName}
          value={firstName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Nazwisko</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeLastName}
          value={lastName}
        />
      </View>

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

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleRegisterPress();
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Zarejestruj się</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const themeColor = "#1AAEB0";

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
