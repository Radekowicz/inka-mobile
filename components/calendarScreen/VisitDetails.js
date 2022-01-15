import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { VisitContext } from "../../contexts/VisitContext";
import { Proxy } from "../../consts/Proxy";
import dayjs from "dayjs";
import pl from "dayjs/locale/pl";
import { useNavigation } from "@react-navigation/native";
import { min } from "lodash";

export default function VisitDetails() {
  const { time, date, patientId } = useContext(VisitContext);
  const [patientData, setPatientData] = useState();
  const navigation = useNavigation();

  const loadPatient = async () => {
    try {
      const response = await fetch(`${Proxy}/api/patients/${patientId}`);
      const data = await response.json();
      const patient = {
        patientId: data?._id,
        firstName: data?.firstName,
        lastName: data?.lastName,
        appointmentType: data?.appointmentType._id,
        appointmentLabel: data?.appointmentType.label,
        appointmentPrice: data?.appointmentType.price,
        doctor: data?.doctor,
      };
      setPatientData(patient);
    } catch (e) {
      console.log(e);
    }
  };

  const handleBookButton = async () => {
    try {
      const split = time.split(":");
      const hours = parseInt(split[0]);
      const minutes = parseInt(split[1]);

      await fetch(`${Proxy}/api/appointments`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: patientData.appointmentType,
          patient: patientData.patientId,
          doctor: patientData.doctor,
          startDate: dayjs(date).add(hours, "hours").add(minutes, "minutes"),
          endDate: dayjs(date)
            .add(hours + 1, "hours")
            .add(minutes, "minutes"),
        }),
      });
    } catch (e) {
      console.log(e);
    }
    navigation.navigate("Moje wizyty");
  };

  useEffect(() => {
    loadPatient();
  }, []);

  var customParseFormat = require("dayjs/plugin/customParseFormat");
  require("dayjs/locale/pl");
  dayjs.extend(customParseFormat);
  const formatedDate = dayjs(date, "YYYY-MM-DD", pl).format("dddd, DD MMMM");

  return (
    <SafeAreaView>
      <Text style={styles.title}>Twoja wizyta</Text>
      <View style={styles.details}>
        <View styles={styles.detail}>
          <Text style={styles.topText}>Rodzaj wizyty</Text>
          <Text style={styles.mainText}>{patientData?.appointmentLabel}</Text>
        </View>
        <View styles={styles.detail}>
          <Text style={styles.topText}>Data i godzina</Text>
          <Text style={styles.mainText}>{formatedDate}</Text>
          <Text style={styles.bottomText}>{time}</Text>
        </View>
        <View styles={styles.detail}>
          <Text style={styles.topText}>Cena za wizytę</Text>
          <Text style={styles.mainText}>{patientData?.appointmentPrice}zł</Text>
        </View>
        <View styles={styles.detail}>
          <Text style={styles.topText}>Zaliczka</Text>
          <Text style={styles.mainText}>50 zł</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => handleBookButton()}
      >
        <Text style={styles.bookButtonText}>Rezerwuj</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const themeColor = "#5856D6";

const styles = StyleSheet.create({
  details: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    marginBottom: 50,
    marginTop: 20,
    width: 300,
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingVertical: 80,
    borderRadius: 20,
  },
  detail: {
    borderBottomWidth: 1,
    borderColor: "red",
    backgroundColor: "red",
  },
  topText: {
    textAlign: "center",
    color: "grey",
  },
  mainText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
  bottomText: {
    textAlign: "center",
    fontSize: 14,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 5,
  },
  bookButton: {
    backgroundColor: themeColor,
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  bookButtonText: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "500",
    color: "white",
  },
});
