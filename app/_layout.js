import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="auth/LoadingScreen" />
      <Stack.Screen name="auth/LoginScreen" /> 
      <Stack.Screen name="auth/RegistrationScreen" />
      {/* Add other screens here */}
    </Stack>
  );
}
