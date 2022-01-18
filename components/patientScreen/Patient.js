import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Proxy } from "../../consts/Proxy";
import { VisitContext } from "../../contexts/VisitContext";

export default function Patient() {
  const { patientId, setPatientId, isLogged, setIsLogged } =
    useContext(VisitContext);
  const [patientData, setPatientData] = useState();

  const loadPatient = async () => {
    const response = await fetch(`${Proxy}/api/patients/${patientId}`);
    const data = await response.json();
    const patient = {
      id: data._id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      address: data.address,
    };
    setPatientData(patient);
  };

  useEffect(() => {
    loadPatient();
  }, []);

  const logout = async () => {
    const response = await fetch(`${Proxy}/api/patients/logout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.mainContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={require("../../pictures/profilePicture.png")}
            style={styles.profilePicture}
          ></Image>
          <View style={styles.profileNameContainer}>
            <Text style={styles.profileName}>
              {patientData?.firstName || "Helen"}{" "}
              {patientData?.lastName || "Dunphy"}
            </Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            {patientData?.email || "helen.dunphy@gmail.com"}
          </Text>
          <Text style={styles.infoText}>
            {patientData?.phoneNumber || "123456789"}
          </Text>
        </View>
        <TouchableOpacity style={styles.stripsContainer}>
          <Ionicons style={styles.stripsImage} name="ios-wallet" />
          <Text style={styles.stripsText}>Płatność</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stripsContainer}>
          <Ionicons style={styles.stripsImage} name="ios-notifications" />
          <Text style={styles.stripsText}>Powiadomienia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stripsContainer}>
          <Ionicons style={styles.stripsImage} name="ios-settings" />
          <Text style={styles.stripsText}>Ustawienia</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.stripsContainer}
          onPress={async () => {
            logout();
            setIsLogged(false);
          }}
        >
          <Ionicons style={styles.stripsImage} name="ios-log-out" />
          <Text style={styles.stripsText}>Wyloguj się</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const themeColor = "#1AAEB0";

const styles = StyleSheet.create({
  safeView: {},
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: -30,
  },
  profileContainer: {
    flexDirection: "row",
    marginBottom: 15,
    marginTop: 30,
  },
  profilePicture: {
    width: 100,
    height: 100,
    aspectRatio: 1,
    borderRadius: 100 / 2,
    marginRight: 10,
  },
  profileNameContainer: {
    justifyContent: "center",
    marginLeft: 10,
  },
  profileName: {
    textAlignVertical: "center",
    fontSize: 24,
    fontWeight: "600",
  },
  infoText: {
    fontSize: 14,
    color: "grey",
    marginVertical: 10,
  },
  stripsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  stripsImage: {
    fontSize: 28,
    marginRight: 20,
  },
  stripsText: {
    marginRight: 10,
    fontSize: 22,
  },
});
