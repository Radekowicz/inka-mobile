import React, {useState, Fragment} from 'react';
import {StyleSheet, View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import _ from 'lodash';


const CalendarsScreen = () => {

  const onDayPress = (day) => {
    setSelected(day.dateString);
  };


  const renderCalendarWithSelectableDate = () => {
    return (
      <Fragment>
        <Text style={styles.text}>Calendar with selectable date</Text>
        <Calendar
          current={'2020-02-02'}
          style={styles.calendar}
          hideExtraDays
          onDayPress={onDayPress}
        />
      </Fragment>
    );
  };



  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {renderCalendarWithSelectableDate()}
    </ScrollView>
  );
};

export default CalendarsScreen;

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16,
  },
});