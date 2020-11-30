import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';





export default function Patient() {

    const [patientData, setPatientData] = useState()

    const loadPatients = async () => {
        const response = await fetch("http://localhost:4000/patients");
        const data = await response.json();
        const patients = data.map((patient, index) => ({
            id: patient._id,
            firstName: patient.firstName,
            lastName: patient.lastName,
            email: patient.email,
            phoneNumber: patient.phoneNumber,
            address: patient.address,
        }));
        setPatientData(patients)
    };

    useEffect(() => {
        loadPatients()
    }, [])

    return (
        <SafeAreaView style={styles.safeView}>
            <View style={styles.mainContainer}>
                <View style={styles.profileContainer}>
                    <Image source={require('../../pictures/profilePicture.jpg')} style={styles.profilePicture}></Image>
                    <View style={styles.profileNameContainer}>
                        <Text style={styles.profileName}>{patientData ? patientData[0].firstName : "Helen"} {patientData ? patientData[0].lastName : "Dunphy"}</Text>
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>helendunphy@gmail.com</Text>
                    <Text style={styles.infoText}>+48 586949333</Text>
                </View>
                <TouchableOpacity style={styles.stripsContainer}>

                    <Ionicons style={styles.stripsImage} name="ios-wallet" />
                    <Text style={styles.stripsText}>Płatność</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.stripsContainer}>
                    <Ionicons style={styles.stripsImage} name="ios-notifications" />
                    <Text style={styles.stripsText}>Powiadomienia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.stripsContainer}>
                    <Ionicons style={styles.stripsImage} name="ios-settings" />
                    <Text style={styles.stripsText}>Ustawienia</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const themeColor = "#5856D6"

const styles = StyleSheet.create({
    safeView: {

    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: -30,
    },
    profileContainer: {
        flexDirection: 'row',
        marginBottom: 15,
        marginTop: 30,
    },
    profilePicture: {
        width: 100, 
        height: 100, 
        aspectRatio: 1,
        borderRadius: 100/2,
        marginRight: 10
    },
    profileNameContainer: {
        justifyContent: 'center',
        marginLeft: 10,
    },
    profileName: {
        textAlignVertical: "center",
        fontSize: 24,
        fontWeight: '600',
    },
    infoText: {
        fontSize: 14,
        color: 'grey',
        marginVertical: 10
    },
    stripsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    stripsImage: {
        fontSize: 28,
        marginRight: 20,
    },
    stripsText: {
        marginRight: 10,
        fontSize: 22,
    },
  });