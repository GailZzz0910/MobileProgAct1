import React, { useState } from "react";//UI Library sa react
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";// mga react native compenents sa Stylesheet, Text, view, textinput, touchableOpacity, imagebackground, ug image
import { BlurView } from "expo-blur"; // package para ma blur ang background
import { StatusBar } from "expo-status-bar"; // package para sa status bar sa app
import Ionicons from "react-native-vector-icons/Ionicons"; // Package import for our icons

export default function App() {
  const [isPasswordVisible, setPasswordVisible] = useState(false); // condition to manage password visibility

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  // Function for login button
  const handleLoginPress = () => {
    console.log("Login button pressed");
  };

  // Function for create button
  const handleCreatePress = () => {
    console.log("Create button pressed");
  };

  // Function for forgot password
  const handleForgotPasswordPress = () => {
    console.log("Forgot Password pressed");
  };

  return (
    <ImageBackground
      source={require("./assets/loginBG.jpg")} // Background image file path
      style={styles.background}
    >
      {/* Syntax para ma blur ang background */}
      <BlurView intensity={150} style={styles.blurContainer}>
        {/* Logo Image */}
        <Image
          source={require("./assets/logo.png")} // Logo file path
          style={styles.logo}
          resizeMode="contain"
        />
        {/* Login Container */}
        <View style={styles.loginContainer}>
          <Text style={styles.signInText}>Sign in</Text>
          <Text style={styles.subText}>Log in your account!</Text>

          {/* Input fields */}
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              {/* Icons sa input fields */}
              <Ionicons
                name="mail-outline"
                size={20}
                color="#1F5676"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.placeholder}
                placeholder="Email or Mobile Number"
                placeholderTextColor="#666"
              />
            </View>
             {/* Para chui ang input fields estitik bitaw */}
            <View style={styles.underline}/>

            <View style={styles.inputWrapper}>
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color="#1F5676"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.placeholder}
                placeholder="Password"
                placeholderTextColor="#666"
                secureTextEntry={!isPasswordVisible} // Toggle password visibility
              />
              {/* Mao dayun ning button para ma trigger tung makita ang password */}
              <TouchableOpacity onPress={togglePasswordVisibility}> 
                <Ionicons
                  name={isPasswordVisible ? "eye-outline" : "eye-off-outline"} // Change icon
                  size={20}
                  color="#666"
                  style={styles.passwordShowButton}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.underline} />

            {/* Shempre mao ning forgot password */}
            <TouchableOpacity onPress={handleForgotPasswordPress}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Mao dayun ning sa login button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Create Account Text and Button */}
        <View style={styles.createAccountContainer}>
          <Text style={styles.createText}>Don't have any account?</Text>
          <TouchableOpacity onPress={handleCreatePress}>
            <Text style={styles.createLink}>Create</Text>
          </TouchableOpacity>
        </View>
      </BlurView>
      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { // Mao ning rason nganong naa ang picture sa background
    flex: 1,
    resizeMode: "cover",
  },
  blurContainer: { // Kani dayun sa background blur ba istetek
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: { // Mao dayun ning sa Logo
    width: 220,
    height: 220,
    marginTop: 30,
  },
  loginContainer: { // login container katong sudlanan sa mga input fields ug katong sa text
    width: "85%",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 30,
    padding: 25,
    marginTop: 10,
    marginBottom: 100,
  },
  signInText: { // di.ara ohhh sign in text
    alignSelf: "flex-start",
    fontSize: 40,
    fontWeight: "bold",
  },
  subText: { // mao dayun ning gamay na text ubos sa sign in
    alignSelf: "flex-start",
    fontSize: 16,
    color: "#000000",
    marginBottom: 45,
    paddingLeft: 3,
  },
  inputContainer: { // mao ning input fields
    width: "100%",
  },
  inputWrapper: { // input wrapper katong plastaranan sa mga icons ug input fields
    flexDirection: "row",
    alignItems: "center",
    marginBottom: -5,
  },
  placeholder: { // mao ning placeholder
    flex: 1,
    height: 50,
    paddingLeft: 10,
    color: "#333",
  },
  underline: { // Ang estitik nga underline sa input fields
    height: 1.5,
    backgroundColor: "#000000",
    marginBottom: 15,
  },
  inputIcon: { // mga Icons
    paddingLeft: 15,
    paddingRight: 10,
  },
  passwordShowButton: { // mao ning show password katong naa sa input fields
    paddingRight: 15,
  },
  forgotPassword: { // forgot password dayun nga hyperlink
    fontWeight: 'bold',
    alignSelf: "flex-end",
    color: "#1F5676",
  },
  loginButton: { // si login button
    width: "70%",
    height: 50,
    backgroundColor: "#1F5676",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: { // si login text
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  createAccountContainer: { // mao ning container atong text sa ubos atong login button para ma align ang text ug create nga hyperlink
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  createText: { // si text
    color: "#000000",
    marginRight: 5,
  },
  createLink: { // ug si hyperlink
    color: "#1F5676",
    fontWeight: "bold",
  },
});
