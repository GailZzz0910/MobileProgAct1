import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Merriweather_400Regular, Merriweather_700Bold } from '@expo-google-fonts/merriweather';
import * as SplashScreen from 'expo-splash-screen';

const Dashboard = () => {
  const [fontsLoaded] = useFonts({
    Merriweather_400Regular,
    Merriweather_700Bold,
  });

  // Prevent auto-hiding of the splash screen until fonts are loaded
  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    };

    prepare();
  }, []);

  // Hide splash screen once fonts are loaded
  useEffect(() => {
    const hideSplashScreen = async () => {
      if (fontsLoaded) {
        try {
          await SplashScreen.hideAsync();
        } catch (e) {
          console.warn(e);
        }
      }
    };

    hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // You can return a placeholder view or spinner if needed
  }

  return (
    <View style={styles.container}>
      <Text style={styles.DBoard}>Error 404: SOREH GI KAPOY PA ANG GA CODE. {'\n'}{'\n'}SUNOD NASAD</Text>
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
