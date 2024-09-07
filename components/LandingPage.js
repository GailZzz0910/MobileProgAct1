import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LandingPage = () => {
  return (
    <View>
      <Text style={styles.LPage}>Landing Page</Text>
    </View>
  )
}

export default LandingPage

const styles = StyleSheet.create({
    LPage: {
        textAlign: "center",
        marginTop: "50%",
        fontSize: 50,
        color: "blue" 
    }    
})