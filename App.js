import { StatusBar } from "expo-status-bar";
import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import CalendarScreen from "./components/calendarScreen/CalendarScreen";
import VisitDetails from "./components/calendarScreen/VisitDetails";
import VisitContextProvider from "./contexts/VisitContext";
import MyVisitsScreen from "./components/myVisitsScreen/MyVisitsScreen";
import PatientScreen from "./components/patientScreen/PatientScreen";
import LoginScreen from "./components/loginScreen/LoginScreen";
import { VisitContext } from "./contexts/VisitContext";

function MakeCalendarScreen() {
  return <CalendarScreen />;
}

function MyAppointmentsScreen() {
  return <MyVisitsScreen />;
}

function MakePatientScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <PatientScreen />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Umów wizytę") {
              iconName = focused ? "ios-calendar" : "ios-calendar";
            } else if (route.name === "Moje wizyty") {
              iconName = focused ? "ios-book" : "ios-book";
            } else if (route.name === "Pacjent") {
              iconName = focused ? "ios-person" : "ios-person";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#1AAEB0",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Umów wizytę" component={MakeCalendarScreen} />
        <Tab.Screen name="Moje wizyty" component={MyAppointmentsScreen} />
        <Tab.Screen name="Pacjent" component={MakePatientScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function InApp() {
  const { isLogged, setIsLogged } = useContext(VisitContext);

  return isLogged ? <Main /> : <LoginScreen />;
}

export default function App() {
  return (
    <VisitContextProvider>
      <InApp />
    </VisitContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
