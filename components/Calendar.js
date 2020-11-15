import React, {useState, Fragment} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import TimelineCalendarScreen from './TimelineCalendarScreen';
import HorizontalCalendarList from './HorizontalCalendarList';
import AgendaScreen from './Agenda'
import CalendarsScreen from './Calendars'


LocaleConfig.locales['pl'] = {
    monthNames: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
    monthNamesShort: ['St','Lut','Mar','Kw','Maj','Cz','Lip','Sier','Wrz','Paź','Lis','Gr'],
    dayNames: ['Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota','Niedziela'],
    dayNamesShort: ['Pon.','Wt.','Śr.','Czw.','Pt.','Sob.','Niedz.'],
    today: 'Dzisiaj'
  };
  LocaleConfig.defaultLocale = 'pl';


  const styles = StyleSheet.create({

  });

  

  
  const MyCalendar = (props) => {
    return (
    <SafeAreaView>
        <View style={styles.container}>
          <TimelineCalendarScreen/>
        </View>
    </SafeAreaView>
    );
  }

  export default MyCalendar;