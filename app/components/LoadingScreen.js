import { StyleSheet, Image, View, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
  
    useEffect(() => {
      // Simulate a task or data fetch
      const loadData = async () => {
        setTimeout(() => {
          setLoading(false); // Stop loading after the task is done
          navigation.replace('LandingPage'); // Navigate to LandingPage
        }, 4000); // Mocking a delay of 4 seconds
      };
  
      loadData();
    }, [navigation]);


  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <ActivityIndicator size="large" color="#1F5676" style={styles.loading} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center items vertically
    alignItems: 'center', // Center items horizontally
    backgroundColor: '#fff',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20, // Adds space between the logo and the loading spinner
  },
  loading: {
    marginTop: 20, // This keeps the ActivityIndicator below the logo
},
});