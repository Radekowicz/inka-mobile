import React from "react"
import { StyleSheet, Text, View, Button, Image, SafeAreaView } from "react-native"

export default function MyVisits() {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Twoje wizyty</Text>
      <View style={styles.visit}>
        <Image source={require("../../pictures/patientSmile.jpg")} style={styles.image} />
        <Text style={styles.mainText}>Wizyta kontrolna z aparatem stałym</Text>
        <Text style={styles.mainText}>środa, 3 września</Text>
        <Text style={styles.mainText}>9:15</Text>
        <Text style={styles.mainText}>280 zł</Text>
      </View>
    </SafeAreaView>
  )
}

const themeColor = "#5856D6"

const styles = StyleSheet.create({
  container: {},
  visit: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 15,
    marginHorizontal: 30,
    marginTop: 50,
    marginBottom: 240,
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
    marginLeft: 30,
  },
})
