import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Image, Button } from 'react-native';
// touchableOpacity
// const IMAGES = {
//   carbo: require(`../../assets/images/carbo.png`),
// };

// prettier https://prettier.io/
export default function Recette({ route, navigation }) {
  //title = "This is a title", stars = 5, pictureName = ""
  // useMemo
  const {title = "This is a title", stars = 5, pictureName = "" } = route.params;
  const generateStars = (_stars) => Array.from(Array(5).fill(null), (_, i) => i <= _stars -1 ? "★" : "☆").join(" ")
  function navigateToCamera() {
      navigation.navigate("Camera");
  }
    return (
      <View style={styles.container}> 
          <Text style={styles.title}>{title}</Text>
          <Image style={styles.image} source={{uri: pictureName}}/>
          <Text style={styles.txt}>{generateStars(stars)}</Text>
          <Text style={styles.txt}>Franchement niveau recette tu peux y aller au talent ça passe ;-)</Text>
          <Button
            title="Prendre photo"
            onPress={() => {
              navigateToCamera()
            }}
          />
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