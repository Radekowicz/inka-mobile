import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CalendarScreen from './components/CalendarScreen'
import VisitDetails from './components/VisitDetails'



function MakeAppointmentScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CalendarScreen />
    </View>
  );
}


function MyAppointmentsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <VisitDetails/>
    </View>
    
  );
}

function PatientScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pacjent</Text>
    </View>
  );
}

function dupa() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pacjent</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Umów wizytę') {
              iconName = focused ? 'ios-calendar' : 'ios-calendar';
            } else if (route.name === 'Moje wizyty') {
              iconName = focused ? 'ios-book' : 'ios-book';
            } else if (route.name === 'Pacjent') {
              iconName = focused ? 'ios-person' : 'ios-person';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#5856D6',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Umów wizytę" component={MakeAppointmentScreen} />
        <Tab.Screen name="Moje wizyty" component={dupa} />
        <Tab.Screen name="Pacjent" component={PatientScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
