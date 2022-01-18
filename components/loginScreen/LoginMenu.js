import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function LoginMenu(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.title}>Denti</Text>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.button}>Logowanie</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={styles.button}>Rejestracja</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const themeColor = "#1AAEB0";

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
});
