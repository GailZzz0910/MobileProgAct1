import {Tabs} from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ 
        tabBarLabel: "home",
        tabBarLabelStyle: {color: "red"},
        headerShown: false,
        tabBarIcon: ({focused}) => focused? (
            <Entypo name="home" size={24} color="1F5676" />
        ) : (
            <Entypo name="home" size={24} color="black" />
        )
         }} />
         <Tabs.Screen name="profile" options={{ 
        tabBarLabel: "profile",
        tabBarLabelStyle: {color: "red"},
        headerShown: false,
        tabBarIcon: ({focused}) => focused? (
            <MaterialCommunityIcons name="account-details" size={24} color="1F5676" />
        ) : (
            <MaterialCommunityIcons name="account-details" size={24} color="black" />
        )
         }} />  
    </Tabs>
  );
}
