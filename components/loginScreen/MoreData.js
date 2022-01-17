import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Dimensions,
  Button,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import DatePicker from "react-native-datepicker";
import { LogBox } from "react-native";
import dayjs from "dayjs";

export default function MoreData() {
  const [date, setDate] = useState(dayjs().format("DD-MM-YYYY"));
  const [phoneNumber, setPhoneNumber] = useState();

  const navigation = useNavigation();
  const route = useRoute();
  const { newPatient } = route.params;

  const handleRegisterPress = async () => {
    newPatient.phoneNumber = phoneNumber;
    newPatient.birthdate = date;
    navigation.navigate("OfficeId", {
      newPatient,
    });
  };

  useEffect(() => {
    LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Numer telefonu</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          keyboardType="phone-pad"
          maxLength={9}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Data urodzenia</Text>
        <DatePicker
          style={{ width: "auto" }}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              display: "none",
            },
            btnTextConfirm: {
              color: themeColor,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
            console.log(date);
          }}
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
