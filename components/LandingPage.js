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
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleCreateAccPress = () => {
    console.log("Create Account button pressed");
    navigation.navigate("Registration");
  };

  const handleSignInPress = () => {
    console.log("Sign In button pressed");
    navigation.navigate("Login");
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
    color: "#D9D9D9",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  blurContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(219, 217, 220, 0.4)",
  },
  logoContainer: {
    position: "absolute",
    top: 40,
    alignItems: "center",
    width: "100%",
  },
  logo: {
    position: "absolute",
    top: 120,
    width: 220,
    height: 220,
  },
  textContainer: {
    position: "absolute",
    top: 520,
    left: 80,
    right: 20,
    alignItems: "flex-start",
  },
  title: {
    fontWeight: "bold", 
    fontSize: 42,
    textAlign: "left",
  },
  subLabel: {
    fontSize: 15,
    textAlign: "left",
    marginTop: 4,
  },
  CreateAccButton: {
    width: "70%",
    height: 50,
    elevation: 10,
    backgroundColor: "#1F5676",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 740,
},
  SignInButton: {
    width: "70%",
    height: 50,
    borderWidth: 2,
    borderColor: "#1F5676",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 805,
},
  CreateAccText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  SignInText: {
    color: "#1F5676",
    fontWeight: "bold",
    fontSize: 17,
  },
});

export default LoginScreen;
