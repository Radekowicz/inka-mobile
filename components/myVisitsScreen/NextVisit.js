import React, { useState, useContext, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { VisitContext } from "../../contexts/VisitContext";
import { Proxy } from "../../consts/Proxy";
import dayjs from "dayjs";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

require("dayjs/locale/pl");
dayjs.locale("pl");

function Visit(props) {
  return (
    <View style={styles.visit}>
      <Image
        source={require("../../pictures/card3.png")}
        style={styles.image}
      />
      <Text style={styles.mainText}>{props.label}</Text>
      <Text style={styles.mainText}>{props.startDate}</Text>
      <Text style={styles.mainText}>{props.startHour}</Text>
      <Text style={styles.mainText}>{props.price} zł</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={async () => await props.onPress(props.appointmentId)}
      >
        <Text style={styles.buttonText}>Odwołaj wizytę</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function NextVisit() {
  const { patientId, date } = useContext(VisitContext);
  const [appointments, setAppointments] = useState([]);
  const navigation = useNavigation();

  const loadAppointments = async () => {
    try {
      const now = dayjs().format("YYYY-MM-DD");
      const response = await fetch(
        `${Proxy}/api/appointments?date=${now}&&patient=${patientId}&&time=after`
      );
      const data = await response.json();
      const newAppointments = data.map((appointment) => ({
        id: appointment?._id,
        label: appointment?.type.label,
        price: appointment?.type.price,
        startDate: dayjs(appointment?.startDate).format("dddd, DD MMMM YYYY"),
        startHour: dayjs(appointment?.startDate).format("HH:mm"),
      }));
      setAppointments(newAppointments);
    } catch (e) {
      console.log(e);
    }
  };
  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [navigation])
  );

  const onPress = async (appointmentId) => {
    try {
      await fetch(`${Proxy}/api/appointments/${appointmentId}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      await loadAppointments();
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title}>Następna wizyta</Text>
        {appointments?.map((appointment) => (
          <Visit
            key={`${appointment.startDate}T${appointment.startHour}`}
            label={appointment.label}
            startDate={appointment.startDate}
            startHour={appointment.startHour}
            price={appointment.price}
            onPress={onPress}
            appointmentId={appointment.id}
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
    height: "auto",
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
  button: {
    backgroundColor: themeColor,
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    marginTop: 20,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
});
