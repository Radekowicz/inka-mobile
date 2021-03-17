import React, { useState, useContext, useEffect } from "react"
import { StyleSheet, Text, View, Button, SafeAreaView, Switch } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"
import Login from "./Login"
import Register from "./Register"
import LoginMenu from "./LoginMenu"

function MakeLoginMenu({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <LoginMenu navigation={navigation} />
    </View>
  )
}
function MakeLogin({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Login />
    </View>
  )
}

function MakeRegister({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Register />
    </View>
  )
}

const Stack = createStackNavigator()

export default function LoginScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="LoginMenu" component={MakeLoginMenu} options={{ headerShown: false }} />
      <Stack.Screen
        name="Login"
        component={MakeLogin}
        options={{ headerShown: true, title: "Zaloguj się" }}
      />
      <Stack.Screen
        name="Register"
        component={MakeRegister}
        options={{ headerShown: true, title: "Rejestracja" }}
      />
    </Stack.Navigator>
  )
}

const themeColor = "#5856D6"

const styles = StyleSheet.create({})
