import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Button } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { navigationRef, isReadyRef  } from './RootNavigation';
import Home from './src/screens/Home';
import RecetteDetail from './src/screens/RecetteDetail';
import Camera from './src/screens/Camera';
import Picture from './src/screens/Picture';

//import Camera from './src/screens/Camera';

const App = () => {
    const Stack = createNativeStackNavigator();
    React.useEffect(() => {
      return () => {
        isReadyRef.current = false
      };
    }, []);
   /*<Stack.Screen name="Picture" component={Picture} />*/
return (
  <NavigationContainer
      ref={navigationRef}
      onReady={() => {

      }}
    >
      {
        <Stack.Navigator screenOptions={{HeaderShown: false}}>
          <Stack.Group>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="RecetteDetail" component={RecetteDetail} />
          </Stack.Group>
          <Stack.Group>
              <Stack.Screen name="Camera" component={Camera} />
              <Stack.Screen name="Picture" component={Picture} />
          </Stack.Group>
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0E0E6',
    paddingTop: 30,
    height: 900,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
  },
});