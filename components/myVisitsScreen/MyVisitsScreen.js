import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MyVisits from './MyVisits'

function MakeMyVisits({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <MyVisits/>
      </View>
    );
}

function MakeDupa({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>XDDDDDDD</Text>
      </View>
    );
}

const Stack = createStackNavigator();

export default function MyVisitsScreen() {
    return (
        <MakeMyVisits/>
    );
  }