import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList, Dimensions} from 'react-native';

// const styles = StyleSheet.create({
//     element: {
//         alignItems: "center",
//         backgroundColor: "#fff",
//         padding: 10,
//         borderRadius: 150 / 2,
//         width: 100,
//         margin: 5
//     },
//     container: {
//         //flexWrap: "wrap",
//         flexDirection: "row",
//     }
// });

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginVertical: 20,
    },
    item: {
      backgroundColor: '#4D243D',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      margin: 1,
      height: Dimensions.get('window').width / numColumns, // approximate a square
    },
    itemInvisible: {
      backgroundColor: 'transparent',
    },
    itemText: {
      color: '#fff',
    },
  });

const VisitElement = (props) => {
    return (
        <TouchableOpacity
        style={styles.element}
        //onPress={onPress}
        >
            <Text>{props.text}</Text>
        </TouchableOpacity>
    );
  }

  const data = [
      { key: "asd"}, { key: "ggg"}, { key: "uuu"}, { key: "77"},

  ]

  const numColumns = 3;


  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
  
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
  
    return data;
  };

  const Visits = (props) => {

    return (
        <FlatList 
            style={styles.container}
            data={formatData(data, numColumns)}
            renderItem={VisitElement} 
            numColumns={numColumns}
            />
    );
  }

  export default Visits;