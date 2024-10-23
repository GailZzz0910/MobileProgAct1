import React from "react"; // UI Library sa React
import { StyleSheet } from "react-native"; // Import StyleSheet from react-native
import { NavigationContainer } from "@react-navigation/native"; // Package for navigation container
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Create native stack navigator

// Import Component Screens
import LoadingScreen from "./components/LoadingScreen";
import LandingPage from "./components/LandingPage";
import LoginScreen from "./components/LoginScreen"; 
import RegistrationScreen from "./components/RegistrationScreen"; 
import Dashboard from "./components/Dashboard";


const Stack = createNativeStackNavigator(); // Initialize stack navigator

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});