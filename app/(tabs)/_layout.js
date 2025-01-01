import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { StyleSheet } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabContainer, // Apply custom styles to the tab bar
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Dashboard",
          tabBarLabelStyle: { color: "#1F5676"},
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="#1F5676" />
            ) : (
              <Entypo name="home" size={24} color="black" />
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "profile",
          tabBarLabelStyle: { color: "#1F5676"},
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons name="account-details" size={24} color="#1F5676" />
            ) : (
              <MaterialCommunityIcons name="account-details" size={24} color="black" />
            ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: "#FFFFFF", // Customize tab background color
    borderTopWidth: 1,
    borderTopColor: "#ddd", // Customize border
    height: 60,
  },
});
