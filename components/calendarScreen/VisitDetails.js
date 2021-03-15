import React, { Component } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import VisitContextProvider from "../../contexts/VisitContext"
import { VisitContext } from "../../contexts/VisitContext"
import dayjs from "dayjs"
import pl from "dayjs/locale/pl"

export default class VisitDetails extends React.Component {
  static contextType = VisitContext

  render() {
    const { time, date } = this.context

    var customParseFormat = require("dayjs/plugin/customParseFormat")
    require("dayjs/locale/pl")
    dayjs.extend(customParseFormat)
    const formatedDate = dayjs(date, "YYYY-MM-DD", pl).format("dddd, DD MMMM")

    return (
      <SafeAreaView>
        <Text style={styles.title}>Twoja wizyta</Text>
        <View style={styles.details}>
          <View styles={styles.detail}>
            <Text style={styles.topText}>Rodzaj wizyty</Text>
            <Text style={styles.mainText}>Wizyta kontrolna z aparatem stałym</Text>
          </View>
          <View styles={styles.detail}>
            <Text style={styles.topText}>Data i godzina</Text>
            <Text style={styles.mainText}>{formatedDate}</Text>
            <Text style={styles.bottomText}>{time}</Text>
          </View>
          <View styles={styles.detail}>
            <Text style={styles.topText}>Cena za wizytę</Text>
            <Text style={styles.mainText}>280 zł</Text>
          </View>
          <View styles={styles.detail}>
            <Text style={styles.topText}>Zaliczka</Text>
            <Text style={styles.mainText}>50 zł</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Rezerwuj</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

const themeColor = "#5856D6"

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
})
