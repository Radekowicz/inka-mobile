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
  CalendarProvider
} from 'react-native-calendars';
import moment from 'moment';
import AvailableHours from './AvailableHours'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LocaleConfig} from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import { VisitContext } from '../../contexts/VisitContext';


LocaleConfig.locales['pl'] = {
  monthNames: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
  monthNamesShort: ['St','Lut','Mar','Kw','Maj','Cz','Lip','Sier','Wrz','Paź','Lis','Gr'],
  dayNames: ['Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota','Niedziela'],
  dayNamesShort: ['Pon.','Wt.','Śr.','Czw.','Pt.','Sob.','Niedz.'],
  today: 'Dzisiaj'
};
LocaleConfig.defaultLocale = 'pl';

export default class TimelineCalendarScreen extends Component {
  state = {
    currentDate: '2020-11-15'
  }

  static contextType = VisitContext
  
  onDateChanged = (date) => {
    const { setDate } = this.context
    setDate(date)
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
      <SafeAreaView>
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
            onPress={() => this.props.navigation.navigate('VisitDetails')}
            >
            <Text style={styles.nextBtnText}>Dalej</Text>
          </TouchableOpacity>
          </View>
          <AvailableHours/>

        </CalendarProvider>
      </SafeAreaView>

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