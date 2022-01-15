import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Switch,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import NextVisit from "./NextVisit";
import MyVisits from "./MyVisits";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { min } from "lodash";

function MakeMyVisits({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <MyVisits />
    </View>
  );
}

function MakeNextVisit({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <NextVisit />
    </View>
  );
}

const Stack = createStackNavigator();

export default function MyVisitsScreen() {
  const navigation = useNavigation();
  const [isClicked, setIsClicked] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("NextVisit");
            setIsClicked(true);
          }}
        >
          <Text style={isClicked ? styles.clicked : styles.notClicked}>
            Następna wizyta
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyVisits");
            setIsClicked(false);
          }}
        >
          <Text style={isClicked ? styles.notClicked : styles.clicked}>
            Poprzednie wizyty
          </Text>
        </TouchableOpacity>
      </View>

      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="NextVisit"
          component={MakeNextVisit}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyVisits"
          component={MakeMyVisits}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

const themeColor = "#1AAEB0";

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  clicked: { fontSize: 20 },
  notClicked: { fontSize: 20, color: "#A9A9A9" },
});
