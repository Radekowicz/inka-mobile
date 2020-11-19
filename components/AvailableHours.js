import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, FlatList, Dimensions} from 'react-native';


  const data = [
    { key: '8:00' }, { key: '9:15' }, { key: '10:00' }, { key: '10:45' }, { key: '11:30' }, 
    { key: '12:30' }, { key: '13:15' }, { key: '14:00' }, { key: '14:45' }, { key: '15:45' }, 
    { key: '16:30' }, { key: '18:00' },
  ];

  const getData = (markedItem) => {
    return data.map(item => ({...item, marked: markedItem?.key === item.key}))
  }
  
  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
  
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
  
    return data;
  };

  var touchProps = {
    activeOpacity: 1,
    underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
    //style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log('HELLO'),                 // <-- "onPress" is apparently required
  };

  
  const numColumns = 3;
  export default class AvailableHours extends React.Component {

    constructor(props) {
      super(props);
      this.state = { color:  '#5856D6', markedItem: 'bla',};
    }

    onPress = (item) => {
      this.setState({
        markedItem: item
      }, () => {
        //console.log(this.state.markedItem)
      });
      
    };

    renderItem = ({ item, index }) => {
      if (item.empty === true) {
        return <View style={[styles.item, styles.itemInvisible]} />;
      }
      return (
        <TouchableOpacity
          onPress={() => {
            this.onPress(item)
          }}
          style={item.marked ? styles.markedItem : styles.item} //wtf does not work
        >
          <Text style={styles.itemText}>{item.key}</Text>
        </TouchableOpacity>
      );
    };
  
    render() {
      return (
        <FlatList
          data={formatData(getData(this.state.markedItem), numColumns)}
          style={styles.container}
          renderItem={this.renderItem}
          numColumns={numColumns}
        />
      );
    }
  }

  const themeColor = "#5856D6"
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginVertical: 10,
      marginLeft: 15,
      marginRight: 15,
    },
    item: {
      backgroundColor: '#fff',
      color: themeColor,
      alignItems: 'center',
      justifyContent: 'center',
      //flex: 1,
      margin: 10,
      width: Dimensions.get('window').width / numColumns - 30,
      height: 50,
      borderRadius: 90,
      borderColor: themeColor,
      borderWidth: 2

      //height: Dimensions.get('window').width / numColumns, // approximate a square
    },
    markedItem: {
      backgroundColor: '#fff',
      color: themeColor,
      alignItems: 'center',
      justifyContent: 'center',
      //flex: 1,
      margin: 10,
      width: Dimensions.get('window').width / numColumns - 30,
      height: 50,
      borderRadius: 90,
      borderColor: "pink",
      borderWidth: 10
    },
    itemInvisible: {
      backgroundColor: 'transparent',
    },
    itemText: {
      color: themeColor,
      fontSize: 15
    },
  });
