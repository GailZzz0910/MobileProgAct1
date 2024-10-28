import { StyleSheet, Text, Image, View, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router'; // Use expo-router for navigation

const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);
    const router = useRouter(); // Use expo-router's router

    useEffect(() => {
        // Simulate a task or data fetch (pero char2 pane kai wapamai i fetch na data so change upon requiremnts)
        const loadData = async () => {
            setTimeout(() => {
                setLoading(false); 
                router.replace('auth/LandingPage'); 
            }, 4000); 
        };

        loadData();
    }, [router]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <ActivityIndicator size="large" color="#1F5676" style={styles.loading} />
        </View>
    );
};

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#fff',
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 20, 
    },
    loading: {
        marginTop: 20, 
    },
});
