import React, { useState, useContext, useEffect } from "react"
import { StyleSheet, Text, View, Button, SafeAreaView, Switch } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"
import Login from "./Login"
import Register from "./Register"

export default function LoginMenu(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.title}>DENTI</Text>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Login")
          }}
        >
          <Text style={styles.button}>Zaloguj się</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Register")
          }}
        >
          <Text style={styles.button}>Rejestracja</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const themeColor = "#5856D6"

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    textAlign: "center",
    marginTop: 120,
  },
  toggleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 100,
  },
  button: {
    fontSize: 20,
    borderRadius: 10,
    backgroundColor: themeColor,
    borderColor: themeColor,
    padding: 15,
    marginHorizontal: 20,
    overflow: "hidden",
    color: "white",
  },
})
