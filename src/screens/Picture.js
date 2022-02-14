import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function Picture({ route, navigation }) {

  const {data } = route.params;
    return (
      <View style={styles.container}> 
          <Image style={styles.image} source={{uri: data}}/>
      </View>
    );
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      //justifyContent: 'center', // center, space-around
      padding: 20,
      borderTopWidth: 1,
      borderColor: 'black',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
    },
    txt: {
      fontSize: 15,
      color: 'black',
      fontStyle: 'italic',
      textAlign: 'left',
    },
    title: {
      fontSize: 25,
      color: 'black',
      fontStyle: 'italic',
      textAlign: 'center',
      width: '100%',
    },
    image: {
      height: '50%',
      width: '50%',
      borderRadius: 25,
      resizeMode: "contain",
      alignItems: 'center',
    }
});