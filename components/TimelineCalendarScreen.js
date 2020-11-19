import _ from 'lodash';
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button
} from 'react-native';
import {
  ExpandableCalendar,
  Timeline,
  CalendarProvider
} from 'react-native-calendars';
import moment from 'moment';
import AvailableHours from './AvailableHours'


export default class TimelineCalendarScreen extends Component {
  state = {
    currentDate: '2020-11-15'
  }
  
  onDateChanged = (date) => {
    // console.warn('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
    // fetch and set data for date + week ahead
    console.log(date)
    this.setState({currentDate: date});
  };


  getTheme = () => {
    const themeColor = "#5856D6";
    const lightThemeColor = '#e6efff';
    const disabledColor = '#a6acb1';
    const black = '#20303c';
    const white = '#ffffff';

    return {
      // arrows
      arrowColor: black,
      arrowStyle: {padding: 0},
      // month
      monthTextColor: black,
      textMonthFontSize: 16,
      textMonthFontFamily: 'HelveticaNeue',
      textMonthFontWeight: 'bold',
      // day names
      textSectionTitleColor: black,
      textDayHeaderFontSize: 12,
      textDayHeaderFontFamily: 'HelveticaNeue',
      textDayHeaderFontWeight: 'normal',
      // today
      todayBackgroundColor: lightThemeColor,
      todayTextColor: themeColor,
      // dates
      dayTextColor: themeColor,
      textDayFontSize: 18,
      textDayFontFamily: 'HelveticaNeue',
      textDayFontWeight: '500',
      textDayStyle: {marginTop: Platform.OS === 'android' ? 2 : 4},
      // selected date
      selectedDayBackgroundColor: themeColor,
      selectedDayTextColor: white,
      // disabled date
      textDisabledColor: disabledColor,
      // dot (marked date)
      dotColor: themeColor,
      selectedDotColor: white,
      disabledDotColor: disabledColor,
      dotStyle: {marginTop: -2}
    };
  };

  render() {
    return (
      <CalendarProvider
      // date={ITEMS[0].title}
        date={this.state.currentDate}
        onDateChanged={this.onDateChanged}
        theme={{todayButtonTextColor: '#0059ff'}}
        //showTodayButton
        disabledOpacity={0.6}
        //todayBottomMargin={16}
      >
        <ExpandableCalendar
          // horizontal={false}
          // hideArrows
          disablePan
          hideKnob
          initialPosition={ExpandableCalendar.positions.OPEN}
          // markedDates={this.getMarkedDates()} // {'2019-06-01': {marked: true}, '2019-06-02': {marked: true}, '2019-06-03': {marked: true}};
          // markedDates={() => {}} // {'2019-06-01': {marked: true}, '2019-06-02': {marked: true}, '2019-06-03': {marked: true}};
          theme={this.getTheme()}
          calendarStyle={styles.calendar}
          // headerStyle={styles.calendar} // for horizontal only
          // disableWeekScroll
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Dostępne godziny</Text>
          <TouchableOpacity
          style={styles.nextBtn}
        >
          <Text style={styles.nextBtnText}>Dalej</Text>
        </TouchableOpacity>
        </View>
        <AvailableHours/>

      </CalendarProvider>
    );
  }
}

const themeColor = "#5856D6"

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  section: {
    backgroundColor: '#f0f4f7',
    color: '#79838a'
  },
  text: {
    fontSize: 23,
  },
  nextBtn: {
    marginRight: 30,
  },
  nextBtnText: {
    fontSize: 23,
    color: themeColor
  },
  textContainer: {
    marginTop: 10,
    marginLeft: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});