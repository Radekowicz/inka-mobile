import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calendar from './Calendar'
import VisitDetails from './VisitDetails'




function ChooseAppointmentScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Calendar navigation={navigation}/>
    </View>
  );
}

function VisitDetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <VisitDetails />
    </View>
  );
}

const Stack = createStackNavigator();

export default function CalendarScreen() {
  return (
    <Stack.Navigator   screenOptions={{headerShown: true}}>
      <Stack.Screen 
      name="ChooseAppointment" 
      component={ChooseAppointmentScreen} 
      options={{headerShown: false}}/>
      <Stack.Screen name="VisitDetails" component={VisitDetailsScreen} />
    </Stack.Navigator>
  );
  
}