import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Merriweather_400Regular, Merriweather_700Bold } from '@expo-google-fonts/merriweather';
import AppLoading from 'expo-app-loading';

const Dashboard = () => {
  // Load fonts
  const [fontsLoaded] = useFonts({
    Merriweather_400Regular,
    Merriweather_700Bold,
  });

  // Display AppLoading while fonts are loading
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.DBoard}>Error 404: SOREH GI KAPOY PA ANG GA CODE</Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
  },
  DBoard: {
    fontFamily: 'Merriweather_700Bold', // Apply Merriweather Bold
    color: 'red',
    textAlign: 'center',
    marginTop: 20, // Adjusted from "50%" to a fixed value for better positioning
    fontSize: 50,
  },
});
