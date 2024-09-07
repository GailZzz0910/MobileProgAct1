import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

export default function RegisterScreen({ navigation }) {
  const [isSelected, setSelection] = useState(false); // For the checkbox
  const [gender, setGender] = useState(null); // For gender selection

  const handleContinuePress = () => {
    console.log("Continue button pressed");
  };

  const handleSignInPress = () => {
    navigation.navigate("Login"); // Navigates to the Login screen
  };

  return (
    <ImageBackground
      source={require("../assets/registerBG.jpg")}
      style={styles.backgroundImage}
    >
      <BlurView intensity={160} style={styles.blurView}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>

            <View style={styles.CreateAccContainer}>
              <Text style={styles.title}>Create {'\n'}Account</Text>
              <Text style={styles.subtitle}>Sign up for free!</Text>
            </View>

            {/* First Name and Last Name Fields */}
            <View style={styles.row}>
              <TextInput style={styles.inputHalf} placeholder="First Name" />
              <TextInput style={styles.inputHalf} placeholder="Last Name" />
            </View>

            {/* Email or Mobile Number Field */}
            <TextInput
              style={styles.inputFull}
              placeholder="Email or Mobile Number"
            />

            {/* OTP Field and Send OTP Button */}
            <View style={styles.row}>
              <TextInput style={styles.inputHalf} placeholder="OTP" />
              <TouchableOpacity style={styles.otpButton}>
                <Text style={styles.otpButtonText}>Send OTP</Text>
              </TouchableOpacity>
            </View>

            {/* Password and Confirm Password Fields */}
            <TextInput style={styles.inputFull} placeholder="Password" secureTextEntry />
            <TextInput style={styles.inputFull} placeholder="Confirm Password" secureTextEntry />

            {/* Birthday Selection Fields */}
            <Text style={styles.BDayLabel}>Birthday</Text>
            <View style={styles.row}>
              <TextInput style={styles.inputThird} placeholder="Month" />
              <TextInput style={styles.inputThird} placeholder="Day" />
              <TextInput style={styles.inputThird} placeholder="Year" />
            </View>

            {/* Gender Selection */}
            <Text style={styles.GenderLabel}>Gender</Text>
            <View style={styles.row}>
              <TouchableOpacity
                style={[
                  styles.genderButton,
                  gender === "male" && styles.genderButtonSelected,
                ]}
                onPress={() => setGender("male")}
              >
                <Ionicons name="male" size={24} color={gender === "male" ? "white" : "#1F5676"} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.genderButton,
                  gender === "female" && styles.genderButtonSelected,
                ]}
                onPress={() => setGender("female")}
              >
                <Ionicons name="female" size={24} color={gender === "female" ? "white" : "#1F5676"} />
              </TouchableOpacity>
            </View>

            {/* Custom Checkbox for Terms of Service */}
            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                style={[styles.customCheckbox, isSelected && styles.checkboxSelected]}
                onPress={() => setSelection(!isSelected)}
              >
                {isSelected && <Ionicons name="checkmark" size={20} color="white" />}
              </TouchableOpacity>
              <Text style={styles.termsText}>
                I agree to the <Text style={styles.linkText}>Terms of Service</Text>,{" "}
                <Text style={styles.linkText}>Privacy Policy</Text>, and consent to
                the use of cookies.
              </Text>
            </View>

            {/* Continue Button */}
            <TouchableOpacity
              style={styles.continueButton}
              onPress={handleContinuePress}
            >
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>

            {/* Sign In Link */}
            <View style={styles.signInAccountContainer}>
              <Text style={styles.signInText}>Already have an account?</Text>
              <TouchableOpacity onPress={handleSignInPress}>
                <Text style={styles.loginLink}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </BlurView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  blurView: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
    paddingVertical: 20, // Optional padding for better vertical alignment
  },
  container: {
    width: "85%", // Explicit width for the container
    borderRadius: 10,
    padding: 20,
    alignItems: "center", // Centers content within the container
  },
  CreateAccContainer: {
    alignItems: 'flex-start', // Align children to the start (left edge)
    width: "100%", // Ensures it takes full width for proper alignment
    
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 30,
  },

  BDayLabel:{
    alignItems: 'flex-start', // Align children to the start (left edge)
    width: "100%",
    color:"black"
  },

  GenderLabel:{
    alignItems: 'flex-start', // Align children to the start (left edge)
    width: "100%",
    color:"black",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
    marginTop: 1,
  },
  inputHalf: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "white",
  },
  inputFull: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "white",
    marginBottom: 10,
  },
  inputThird: {
    width: "30%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "white",
  },
  otpButton: {
    backgroundColor: "#1F5676",
    padding: 10,
    borderRadius: 8,
    width: "48%", // Aligns with OTP input
    alignItems: "center",
  },
  otpButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  genderButton: {
    width: "48%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#1F5676",
    borderRadius: 8,
    alignItems: "center",
  },
  genderButtonSelected: {
    backgroundColor: "#1F5676",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    width: "100%",
  },
  customCheckbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#1F5676",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 20,
  },
  checkboxSelected: {
    backgroundColor: "#1F5676",
  },
  termsText: {
    color: "#333",
    flexWrap: "wrap",
    flex: 1,
  },
  linkText: {
    color: "#1F5676",
    fontWeight: "bold",
  },
  continueButton: {
    width: "100%",
    padding: 15,
    backgroundColor: "#1F5676",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  continueButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  signInAccountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  signInText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  loginLink: {
    fontSize: 14,
    color: "#1F5676",
    marginLeft: 5,
    fontWeight: "bold",
  },
});
