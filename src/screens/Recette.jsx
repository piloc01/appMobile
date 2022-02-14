import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
// touchableOpacity
// const IMAGES = {
//   carbo: require(`../../assets/images/carbo.png`),
// };

// prettier https://prettier.io/

export default function Recette({title = "This is a title", stars = 5, pictureName = ""}) {

  const generateStars = (_stars) => Array.from(Array(5).fill(null), (_, i) => i <= _stars -1 ? "★" : "☆").join(" ")
  const navigation = useNavigation();

  function navigateToDetails() {
      navigation.navigate("RecetteDetail", {title: title, stars: stars, pictureName: pictureName});
  }
    return (
      <TouchableOpacity style={styles.container} onPress={() => navigateToDetails()} 
      title="Go to RecetteDetail">
        <Image style={styles.image} source={{uri: pictureName}}/> 
        <View>       
          <Text style={styles.txt}>{title}</Text>
          <Text style={styles.txt}>{generateStars(stars)}</Text>
        </View>
      </TouchableOpacity>
    );
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignSelf: 'stretch',
      height: 70,
      //justifyContent: 'center', // center, space-around
      padding: 12,
      paddingLeft: 25,
      borderTopWidth: 1,
      borderColor: 'black',
    },
    txt: {
      fontSize: 15,
      color: 'black',
      fontStyle: 'italic',
      textAlign: 'left',
    },
    image: {
      height: 50,
      width: 50,
      borderRadius: 25,
      marginRight: 20,
      resizeMode: "contain"
    }
});