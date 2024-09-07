import React from "react";
import { StyleSheet, Text, View, TextInput, ImageBackground, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, Button } from 'react-native'; 

const LoginScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <ImageBackground 
          source={require("../assets/loginBG.jpg")} 
          style={styles.imageBackground}
        >
          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "position"}
            style={styles.keyboardAvoidingView}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.loginContainer}>
                  <Text style={styles.signInText}>Sign in</Text>
                  <Text style={styles.subText}>Log in your account!</Text>
                  
                  <TextInput
                      style={styles.placeholder}
                      placeholder="Email or Mobile Number"
                      placeholderTextColor="#666"
                  />

                  <Button 
                    title="Sign Up" 
                    onPress={() => navigation.navigate("Registration")} 
                  />
                </View>
              </ScrollView>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    );
};

export default LoginScreen;

// STYLESHEET
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover', // Ensures the image covers the entire view
    },
    keyboardAvoidingView: {
        flex: 1,
        justifyContent: 'center',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    loginContainer: {
        width: "85%",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        borderRadius: 30,
        padding: 25,
        marginTop: 10,
        marginBottom: 100,
        alignSelf: 'center',
    },
    signInText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subText: {
        fontSize: 16,
        color: "#666",
        marginBottom: 20,
    },
    placeholder: {
        height: 50,
        paddingLeft: 10,
        color: "#000",
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: 10,
    },
});
