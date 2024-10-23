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
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router"; 

export default function RegisterScreen({ navigation }) {
  const router = useRouter();
  const [isSelected, setSelection] = useState(false); // For the checkbox
  const [gender, setGender] = useState(null); // For gender selection
  const [birthDate, setBirthDate] = useState(new Date()); // For birthdate
  const [showPicker, setShowPicker] = useState(false); // To control the visibility of the date picker
  const [passwordVisible, setPasswordVisible] = useState(false); // Toggle password visibility
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // Toggle confirm password visibility

  const handleContinuePress = () => {
    router.push("/(tabs)/home");
    console.log("Continue button pressed");
  };

  const handleSignInPress = () => {
    router.push("/auth/LoginScreen"); // Navigates to the Login screen
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthDate;
    setShowPicker(false); // Close picker after selection
    setBirthDate(currentDate);
  };

  return (
    <ImageBackground
      source={require("../assets/registerBG.jpg")}
      style={styles.background}
    >
      <BlurView intensity={160} style={styles.blurContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Sign up for free!</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.row}>
              <TextInput
                style={styles.inputHalf}
                placeholder="First Name"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
              />
              <TextInput
                style={styles.inputHalf}
                placeholder="Last Name"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
              />
            </View>

            <TextInput
              style={styles.inputFull}
              placeholder="Email or Mobile Number"
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
            />

            <View style={styles.row}>
              <TextInput
                style={styles.inputHalf}
                placeholder="OTP"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
              />
              <TouchableOpacity style={styles.otpButton}>
                <Text style={styles.otpButtonText}>Send OTP</Text>
              </TouchableOpacity>
            </View>

            {/* Password Input */}
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.inputPassword}
                placeholder="Password"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                secureTextEntry={!passwordVisible} // Toggles visibility
              />
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
                style={styles.eyeIcon}
              >
                <Ionicons
                  name={passwordVisible ? "eye" : "eye-off"}
                  size={24}
                  color="#1F5676"
                />
              </TouchableOpacity>
            </View>

            {/* Confirm Password Input */}
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.inputPassword}
                placeholder="Confirm Password"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                secureTextEntry={!confirmPasswordVisible} // Toggles visibility
              />
              <TouchableOpacity
                onPress={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
                style={styles.eyeIcon}
              >
                <Ionicons
                  name={confirmPasswordVisible ? "eye" : "eye-off"}
                  size={24}
                  color="#1F5676"
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.formContainerText}>Birth Date:</Text>
            <TouchableOpacity
              onPress={() => setShowPicker(true)}
              style={styles.dateButton}
            >
              <Text style={styles.dateText}>{birthDate.toDateString()}</Text>
              <Ionicons name="calendar" size={24} color="#1F5676" />
            </TouchableOpacity>

            {showPicker && (
              <DateTimePicker
                value={birthDate}
                mode="date"
                display="default"
                onChange={onDateChange}
                maximumDate={new Date()}
              />
            )}

            <Text style={styles.formContainerText}>Gender:</Text>
            <View style={styles.row}>
              <TouchableOpacity
                style={[
                  styles.genderButton,
                  gender === "male" && styles.genderButtonSelected,
                ]}
                onPress={() => setGender("male")}
              >
                <Ionicons
                  name="male"
                  size={24}
                  color={gender === "male" ? "white" : "#1F5676"}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.genderButton,
                  gender === "female" && styles.genderButtonSelected,
                ]}
                onPress={() => setGender("female")}
              >
                <Ionicons
                  name="female"
                  size={24}
                  color={gender === "female" ? "white" : "#1F5676"}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                style={[
                  styles.customCheckbox,
                  isSelected && styles.checkboxSelected,
                ]}
                onPress={() => setSelection(!isSelected)}
              >
                {isSelected && (
                  <Ionicons name="checkmark" size={20} color="white" />
                )}
              </TouchableOpacity>
              <Text style={styles.termsText}>
                I agree to the{" "}
                <Text style={styles.linkText}>Terms of Service</Text>,{" "}
                <Text style={styles.linkText}>Privacy Policy</Text>, and consent
                to the use of cookies.
              </Text>
            </View>
          </View>

          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={styles.continueButton}
              onPress={handleContinuePress}
            >
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>

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
  background: {
    flex: 1,
    resizeMode: "cover", // Optional: how you want the image to fit
    justifyContent: "center", // Centers content vertically
    backgroundColor: "#D9D9D9",
  },
  blurContainer: {
    flex: 1,
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
    paddingVertical: 20, // Optional padding for better vertical alignment
  },
  headerContainer: {
    width: "85%", // Align with the form width
    alignSelf: "flex-start", // Align the header text to the left
    paddingLeft: "10%",
    marginTop: 55,
  },
  formContainer: {
    width: "91%", // Make the form take a smaller portion of the width
    padding: 20,
    marginTop: 15,
    marginBottom: 30, // Space between form and footer
  },
  footerContainer: {
    width: "85%",
    alignItems: "center", // Align the buttons and links
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
  formContainerText: {
    fontSize: 17,
    marginLeft: 2,
    marginBottom: 7,
    marginTop: -10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },
  inputHalf: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#1F5676",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "rgba(217, 217, 217, 0.5)", // Set input background color with transparency
  },
  inputFull: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#1F5676",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "rgba(217, 217, 217, 0.5)", // Set input background color with transparency
    marginBottom: 15,
  },
  otpButton: {
    width: "48%",
    backgroundColor: "#1F5676",
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  otpButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#1F5676",
    borderRadius: 8,
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  inputPassword: {
    flex: 1,
    padding: 10,
  },
  eyeIcon: {
    paddingHorizontal: 10,
  },
  dateButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1F5676",
    borderRadius: 8,
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    padding: 10,
    marginBottom: 15,
    width: "100%",
  },
  dateText: {
    color: "rgba(0, 0, 0, 0.5)",
  },
  genderButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1F5676",
    borderRadius: 8,
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    padding: 10,
    width: "48%",
  },
  genderButtonSelected: {
    backgroundColor: "#1F5676",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  customCheckbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "#1F5676",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkboxSelected: {
    backgroundColor: "#1F5676",
  },
  termsText: {
    flex: 1,
    fontSize: 14,
    color: "black",
  },
  linkText: {
    color: "#1F5676",
    textDecorationLine: "underline",
  },
  continueButton: {
    backgroundColor: "#1F5676",
    paddingVertical: 15,
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
    borderRadius: 30,
    elevation: 10,
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  signInAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signInText: {
    fontSize: 16,
    color: "#666",
    marginRight: 5,
  },
  loginLink: {
    fontSize: 16,
    color: "#1F5676",
    fontWeight: "bold",
  },
});
