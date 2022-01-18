import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import NextVisit from "./NextVisit";
import MyVisits from "./MyVisits";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function MakeMyVisits() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <MyVisits />
    </View>
  );
}

function MakeNextVisit() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <NextVisit />
    </View>
  );
}

const Stack3 = createStackNavigator();

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

      <Stack3.Navigator screenOptions={{ headerShown: true }}>
        <Stack3.Screen
          name="NextVisit"
          component={MakeNextVisit}
          options={{ headerShown: false }}
        />
        <Stack3.Screen
          name="MyVisits"
          component={MakeMyVisits}
          options={{ headerShown: false }}
        />
      </Stack3.Navigator>
    </SafeAreaView>
  );
}

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
