import React, { useState, useContext, useEffect } from "react"
import { StyleSheet, Text, View, Button, Image, SafeAreaView } from "react-native"
import { VisitContext } from "../../contexts/VisitContext"
import { Proxy } from "../../consts/Proxy"
import dayjs from "dayjs"
import { useNavigation } from "@react-navigation/native"
require("dayjs/locale/pl")
dayjs.locale("pl")

export default function NextVisit() {
  const { patientId, date } = useContext(VisitContext)
  const [appointments, setAppointments] = useState()
  const [patientData, setPatientData] = useState()
  const navigation = useNavigation()

  const loadAppointments = async () => {
    try {
      const response = await fetch(`${Proxy}/api/appointments?date=${date}&&patient=${patientId}`)
      const data = await response.json()
      const appointments = data.map((appointment) => ({
        id: appointment?._id,
        label: appointment?.type.label,
        price: appointment?.type.price,
        startDate: dayjs(appointment?.startDate).format("dddd, DD MMMM"),
        startHour: dayjs(appointment?.startDate).format("HH:mm"),
      }))
      setAppointments(appointments)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    loadAppointments()
  }, [])

  return (
    <SafeAreaView>
      <Text style={styles.title}>Następna wizyta</Text>
      {appointments?.map((appointment, index) => (
        <View style={styles.visit}>
          <Image source={require("../../pictures/patientSmile.jpg")} style={styles.image} />
          <Text style={styles.mainText}>{appointments[index].label}</Text>
          <Text style={styles.mainText}>{appointments[index].startDate}</Text>
          <Text style={styles.mainText}>{appointments[index].startHour}</Text>
          <Text style={styles.mainText}>{appointments[index].price} zł</Text>
        </View>
      ))}
    </SafeAreaView>
  )
}

const themeColor = "#5856D6"

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
})
