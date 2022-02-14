import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function TopBar() {
  //const goTo = () => navigation.navigate("Details");
    return (
      <View style={styles.container}>
        <Text></Text>
        <Text style={styles.txt}>Recette de cuisine</Text>
        <Text></Text>
      </View>
    );
}
  
  const styles = StyleSheet.create({
    container: {
      alignSelf: 'stretch',
      height: 60,
      flexDirection: 'row', // row
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'space-between', // center, space-around
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 35,
    },
    txt: {
      fontSize: 25,
      color: 'white',
      fontStyle: 'italic'
    }
});