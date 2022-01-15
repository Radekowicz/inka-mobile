import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
} from "react-native";
import { VisitContext } from "../../contexts/VisitContext";
import { Proxy } from "../../consts/Proxy";
import dayjs from "dayjs";
import { ScrollView } from "react-native-gesture-handler";
require("dayjs/locale/pl");
dayjs.locale("pl");

function Visit(props) {
  return (
    <View style={styles.visit}>
      <Text style={styles.mainText}>{props.label}</Text>
      <Text style={styles.mainText}>{props.startDate}</Text>
      <Text style={styles.mainText}>{props.startHour}</Text>
      <Text style={styles.mainText}>{props.price} zł</Text>
    </View>
  );
}
export default function MyVisits() {
  const { patientId, setPatientId, date } = useContext(VisitContext);
  const [appointments, setAppointments] = useState();
  const loadAppointments = async () => {
    try {
      const response = await fetch(
        `${Proxy}/api/appointments?date=${date}&&patient=${patientId}&&time=before`
      );
      const data = await response.json();
      const appointments = data.map((appointment) => ({
        id: appointment?._id,
        label: appointment?.type.label,
        price: appointment?.type.price,
        startDate: dayjs(appointment?.startDate).format("dddd, DD MMMM YYYY"),
        startHour: dayjs(appointment?.startDate).format("HH:mm"),
      }));
      setAppointments(appointments);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title}>Twoje wizyty</Text>
        {appointments?.map((appointment) => (
          <Visit
            key={`${appointment.startDate}T${appointment.startHour}`}
            label={appointment.label}
            startDate={appointment.startDate}
            startHour={appointment.startHour}
            price={appointment.price}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const themeColor = "#1AAEB0";

const styles = StyleSheet.create({
  container: {},
  visit: {
    backgroundColor: "#fff",
    paddingBottom: 15,
    marginHorizontal: 30,
    marginBottom: 10,
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 2,
    borderRadius: 20,
  },
  topText: {
    textAlign: "center",
    color: "grey",
  },
  mainText: {
    textAlign: "left",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 15,
    marginRight: 70,
    marginVertical: 10,
  },
  dateText: {
    textAlign: "left",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 15,
    marginRight: 70,
  },
  timeText: {
    textAlign: "left",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 15,
    marginRight: 70,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 30,
  },
});
