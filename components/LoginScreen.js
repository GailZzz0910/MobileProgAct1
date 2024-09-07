import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

const LoginScreen = ({ navigation }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  // Function for login button
  const handleLoginPress = () => {
    console.log("Login button pressed"); // Ensure this logs to your console
  };

  // Function for create button
  const handleCreatePress = () => {
    console.log("Create button pressed"); // Ensure this logs to your console
    navigation.navigate("Registration"); // Navigate to Registration screen
  };

  // Function for forgot password
  const handleForgotPasswordPress = () => {
    console.log("Forgot Password pressed"); // Ensure this logs to your console
  };

  return (
    <ImageBackground
      source={require("../assets/loginBG.jpg")}
      style={styles.imageBackground}
    >
      <BlurView intensity={160} style={styles.blurContainer}>
        {/* Logo Image */}
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        {/* Login Container */}
        <View style={styles.loginContainer}>
          <Text style={styles.signInText}>Sign in</Text>
          <Text style={styles.subText}>Log in to your account!</Text>

          {/* Input fields */}
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="mail-outline"
                size={20}
                color="#1F5676"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Email or Mobile Number"
                placeholderTextColor="#666"
              />
            </View>
            <View style={styles.underline} />

            <View style={styles.inputWrapper}>
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color="#1F5676"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#666"
                secureTextEntry={!isPasswordVisible}
              />
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <Ionicons
                  name={isPasswordVisible ? "eye-outline" : "eye-off-outline"}
                  size={20}
                  color="#666"
                  style={styles.passwordShowButton}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.underline} />

            <TouchableOpacity onPress={handleForgotPasswordPress}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Create Account Text and Button */}
        <View style={styles.createAccountContainer}>
          <Text style={styles.createText}>Don't have an account?</Text>
          <TouchableOpacity onPress={handleCreatePress}>
            <Text style={styles.createLink}>Create</Text>
          </TouchableOpacity>
        </View>
      </BlurView>
      <StatusBar style="light" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  blurContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 220,
    height: 220,
    marginTop: 30,
  },
  loginContainer: {
    width: "85%",
    backgroundColor: "rgba(219, 217, 220, 0.6)",
    borderRadius: 30,
    padding: 25,
    marginTop: 10,
    marginBottom: 100,
  },
  signInText: {
    alignSelf: "flex-start",
    fontSize: 40,
    fontWeight: "bold",
  },
  subText: {
    alignSelf: "flex-start",
    fontSize: 16,
    color: "#000000",
    marginBottom: 45,
    paddingLeft: 3,
  },
  inputContainer: {
    width: "100%",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: -5,
  },
  input: {
    flex: 1,
    height: 50,
    paddingLeft: 10,
    color: "#333",
  },
  underline: {
    height: 1.5,
    backgroundColor: "#000000",
    marginBottom: 15,
  },
  inputIcon: {
    paddingLeft: 15,
    paddingRight: 10,
  },
  passwordShowButton: {
    paddingRight: 15,
  },
  forgotPassword: {
    fontWeight: "bold",
    alignSelf: "flex-end",
    color: "#1F5676",
  },
  loginButton: {
    width: "70%",
    height: 50,
    elevation: 10,
    backgroundColor: "#1F5676",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  createAccountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  createText: {
    color: "#000000",
    marginRight: 5,
  },
  createLink: {
    color: "#1F5676",
    fontWeight: "bold",
  },
});

export default LoginScreen;
