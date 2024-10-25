import { StyleSheet, Image, View, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
  
    useEffect(() => {
      // Simulate a task or data fetch (pero char2 pane kai wapamai i fetch na data so change upon requiremnts)
      const loadData = async () => {
        setTimeout(() => {
          setLoading(false); 
          navigation.replace('LandingPage'); 
        }, 4000); 
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