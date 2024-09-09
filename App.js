import React from "react"; // UI Library sa React
import { StyleSheet } from "react-native"; // Import StyleSheet from react-native
import { NavigationContainer } from "@react-navigation/native"; // Package for navigation container
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Create native stack navigator
import LoginScreen from "./components/LoginScreen"; // Import LoginScreen component
import RegistrationScreen from "./components/RegistrationScreen"; // Import RegistrationScreen component
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";

const Stack = createNativeStackNavigator(); // Initialize stack navigator

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage" screenOptions={{ headerShown: false }}>
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
