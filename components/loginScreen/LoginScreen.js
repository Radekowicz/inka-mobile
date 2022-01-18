import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import Register from "./Register";
import LoginMenu from "./LoginMenu";
import OfficeId from "./OfficeId";
import MoreData from "./MoreData";
import { NavigationContainer } from "@react-navigation/native";

function MakeLoginMenu({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <LoginMenu navigation={navigation} />
    </View>
  );
}
function MakeLogin() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Login />
    </View>
  );
}

function MakeRegister() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Register />
    </View>
  );
}

function MakeOfficeId() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <OfficeId />
    </View>
  );
}

function MakeMoreData() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <MoreData />
    </View>
  );
}

const Stack2 = createStackNavigator();

export default function LoginScreen() {
  return (
    <NavigationContainer>
      <Stack2.Navigator screenOptions={{ headerShown: true }}>
        <Stack2.Screen
          name="LoginMenu"
          component={MakeLoginMenu}
          options={{ headerShown: false, title: "" }}
        />
        <Stack2.Screen
          name="Login"
          component={MakeLogin}
          options={{ headerShown: true, title: "" }}
        />
        <Stack2.Screen
          name="Register"
          component={MakeRegister}
          options={{ headerShown: true, title: "" }}
        />
        <Stack2.Screen
          name="MoreData"
          component={MakeMoreData}
          options={{ headerShown: true, title: "" }}
        />
        <Stack2.Screen
          name="OfficeId"
          component={MakeOfficeId}
          options={{ headerShown: true, title: "" }}
        />
      </Stack2.Navigator>
    </NavigationContainer>
  );
}
