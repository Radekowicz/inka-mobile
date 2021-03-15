import React, { useState, useContext, useEffect } from "react"
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  Dimensions,
} from "react-native"
import { VisitContext } from "../../contexts/VisitContext"
import { Proxy } from "../../consts/Proxy"
import dayjs from "dayjs"

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns)

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true })
    numberOfElementsLastRow++
  }

  return data
}

const numColumns = 3

export default function AvailableHours() {
  const [markedItem, setMarkedItem] = useState()
  const { setTime, date, appointments, setAppointments } = useContext(VisitContext)

  const appointmentLength = 45
  const hourStart = 9
  const hourEnd = 22
  const periodMinutes = 15

  const isFree = (date) => {
    const dateStart = date
    const dateEnd = date.add(appointmentLength, "minutes")

    for (let appointment of appointments) {
      if (dateStart.isBefore(appointment.endDate) && dateEnd.isAfter(appointment.startDate)) {
        return false
      }
    }
    return true
  }

  const getData = (markedItem) => {
    const start = dayjs(date).hour(hourStart)
    const end = dayjs(date).hour(hourEnd)

    const availableDates = []
    let currentDate = start
    while (!currentDate.add(appointmentLength, "minutes").isAfter(end)) {
      if (isFree(currentDate)) {
        availableDates.push(currentDate)
      }
      currentDate = currentDate.add(periodMinutes, "minutes")
    }

    return availableDates
      .map((item) => ({ key: item.format("HH:mm") }))
      .map((item) => ({ ...item, marked: markedItem?.key === item.key }))
  }

  useEffect(() => {}, [])

  onPress = (item) => {
    setTime(item.key)
    setMarkedItem(item)
  }

  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />
    }
    return (
      <TouchableOpacity
        onPress={() => onPress(item)}
        style={item.marked ? styles.markedItem : styles.item}
      >
        <Text style={item.marked ? styles.markedItemText : styles.itemText}>{item.key}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      data={formatData(getData(markedItem), numColumns)}
      // data={formatData(getData2(), numColumns)}
      style={styles.container}
      renderItem={renderItem}
      numColumns={numColumns}
    />
  )
}

const themeColor = "#5856D6"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  item: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    width: Dimensions.get("window").width / numColumns - 30,
    height: 50,
    borderRadius: 90,
    borderColor: themeColor,
    borderWidth: 2,

    //height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  markedItem: {
    backgroundColor: themeColor,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    width: Dimensions.get("window").width / numColumns - 30,
    height: 50,
    borderRadius: 90,
  },
  itemInvisible: {
    backgroundColor: "transparent",
  },
  itemText: {
    color: themeColor,
    fontSize: 15,
  },
  markedItemText: {
    color: "#fff",
    fontSize: 15,
  },
})
