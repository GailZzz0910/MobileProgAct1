import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router"; // Use expo-router for navigation

const LoginScreen = () => {
  const router = useRouter(); // Use expo-router's router

  const handleCreateAccPress = () => {
    console.log("Create Account button pressed");
    router.push("/auth/RegistrationScreen"); // Navigate to Registration screen
  };

  const handleSignInPress = () => {
    console.log("Sign In button pressed");
    router.push("/auth/LoginScreen"); // Navigate to Login screen
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/WelcomeBG.png")}
        style={styles.imageBackground}
      >
        <BlurView intensity={160} style={styles.blurContainer}>

          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome to your {'\n'}Study Hub!</Text>
            <Text style={styles.subLabel}>Ready to focus and conquer today's goals?{'\n'}Let's get started!</Text>
          </View>

          <TouchableOpacity style={styles.CreateAccButton} onPress={handleCreateAccPress}>
            <Text style={styles.CreateAccText}>Create Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.SignInButton} onPress={handleSignInPress}>
            <Text style={styles.SignInText}>Sign In</Text>
          </TouchableOpacity>
        </BlurView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(245, 245, 245, 0.90)', 
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  blurContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 40,
    alignItems: "center",
    width: "100%",
  },
  logo: {
    position: "absolute",
    top: 100,
    width: 220,
    height: 220,
  },
  textContainer: {
    position: "absolute",
    top: 470, // Adjust this value to position the text container correctly
    left: 55, // Aligns textContainer to the left
    right: 20, // Ensures textContainer doesn't go out of bounds
    alignItems: "flex-start", // Aligns text to the left within the container
  },
  title: {
    fontWeight: "bold", 
    fontSize: 38,
    textAlign: "left",
  },
  subLabel: {
    fontSize: 15,
    textAlign: "left",
    marginTop: 4,
  },
  CreateAccButton: {
    width: "75%",
    height: 50,
    elevation: 10,
    backgroundColor: "#1F5676",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20, // Reduced marginTop to bring the button closer to the SignInButton
    position: "absolute",
    top: 650,
  },
  SignInButton: {
    width: "75%",
    height: 50,
    borderWidth: 2,
    borderColor: "#1F5676",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10, // Reduced marginTop to be close to the CreateAccButton
    position: "absolute",
    top: 720,
  },
  CreateAccText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  SignInText: {
    color: "#1F5676",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default LoginScreen;
