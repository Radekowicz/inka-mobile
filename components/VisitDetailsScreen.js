import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



function Detalis() {
    return (
      <View style={styles.details}>
          <View styles={styles.detail}>
              <Text style={styles.topText}>Rodzaj wizyty</Text>
              <Text style={styles.mainText}>Wizyta kontrolna z aparatem stałym</Text>
          </View>
          <View styles={styles.detail}>
              <Text style={styles.topText}>Data i godzina</Text>
              <Text style={styles.mainText}>Środa, 3 Wrzesień</Text>
              <Text style={styles.bottomText}>9:15</Text>
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
    );
  }


export default function VisitDetailsScreen() {
    return (
      <SafeAreaView>
        <Text style={styles.title}>Twoja wizyta</Text>
        <Detalis/>
        <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Rezerwuj</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const themeColor = "#5856D6"

  const styles = StyleSheet.create({
    details: {
        backgroundColor: "#fff",
        flex: 1, 
        alignItems: 'center',
        marginBottom: 70,
        marginTop: 20,
        width: 300,
        justifyContent:'space-between',
        paddingHorizontal: 40,
        paddingVertical: 80,
        borderRadius: 20,

    },
    detail: {
        borderBottomWidth: 1,
        borderColor: 'red',
        backgroundColor: 'red',
    },
    topText: {
        textAlign: "center",
        color: 'grey',
    },
    mainText: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "600"
    },
    bottomText: {
        textAlign: "center",
        fontSize: 14,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        marginTop: 40
    },
    bookButton: {
        backgroundColor: themeColor,
        borderRadius: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bookButtonText: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: '500',
        color: 'white'
    }
  });