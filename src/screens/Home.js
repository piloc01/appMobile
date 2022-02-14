import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Button } from 'react-native';
import TopBar from './TopBar';
import RECETTES from '../../recipes.json';
import Recette from './Recette';

const Home = () => {
    
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <ScrollView style={styles.scrollView}>
        {RECETTES.recipes.map(recette => {
          return <Recette key={recette.title} {...recette} />
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

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