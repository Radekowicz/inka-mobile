import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Calendar from "./Calendar";
import VisitDetails from "./VisitDetails";

function MakeCalendar({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Calendar navigation={navigation} />
    </View>
  );
}

function MakeVisitDetails({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <VisitDetails />
    </View>
  );
}

const Stack = createStackNavigator();

export default function CalendarScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="ChooseAppointment"
        component={MakeCalendar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VisitDetails"
        component={MakeVisitDetails}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
}
