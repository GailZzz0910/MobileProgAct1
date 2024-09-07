import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Dashboard = () => {
    return (
        <View>
          <Text style={styles.DBoard}>Dashboard</Text>
        </View>
      )
    }
    
    export default Dashboard
    
    const styles = StyleSheet.create({
        DBoard: {
            color: "Red",
            textAlign: "center",
            marginTop: "50%",
            fontSize: 50
        }
    })