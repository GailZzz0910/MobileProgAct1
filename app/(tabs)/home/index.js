import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

// Path to the background image
const backgroundImage = require('../../assets/dashboardBG.jpg');

const Index = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <ScrollView style={styles.container}>
        {/* Container 1 */}
        <View style={styles.container1}>
          {/* Header */}
          <View style={styles.header}>
            <MaterialIcons name="menu" size={24} color="black" />
            <Ionicons name="notifications-outline" size={24} color="black" />
          </View>

          {/* Greeting */}
          <View style={styles.greetingContainer}>
            <Text style={styles.greeting}>Hi,</Text>
            <Text style={styles.greetingName}> Roy</Text>
          </View>

          {/* Task Reminder Card */}
          <View style={styles.taskCard}>
            <View style={styles.taskHeader}>
              <Text style={styles.taskLabel}>Technopreneurship</Text>
              <Text style={styles.taskDaysLeft}>7 days left</Text>
            </View>
            <Text style={styles.taskTitle}>Business Proposal</Text>
            <Text style={styles.taskDescription}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
            <TouchableOpacity>
              <Text style={styles.viewDetails}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Container 2 */}
        <View style={styles.container2}>
          <View style={styles.TitleContainer}>
            <Text style={styles.sectionTitle}>Today’s Schedule</Text>
            <Text style={styles.dayLabel}>Tuesday</Text>
          </View>

          {/* Schedule Cards */}
          <View style={styles.scheduleCard}>
            <Text style={styles.scheduleTitleAlt}>Software Engineering</Text>
            <View style={styles.scheduleTimeContainerAlt}>
              <Text style={styles.scheduleTimeAlt}>8:00AM - 10:00AM</Text>
              <Text style={styles.scheduleStatusAlt}>Online</Text>
            </View>
          </View>
          <View style={styles.scheduleCardAlt}>
            <Text style={styles.scheduleTitle}>Elective 1</Text>
            <View style={styles.scheduleTimeContainer}>
              <Text style={styles.scheduleTime}>10:00AM - 1:00PM</Text>
              <Text style={styles.scheduleStatus}>CITC Lab 4</Text>
            </View>
          </View>
          <View style={styles.scheduleCardAlt}>
            <Text style={styles.scheduleTitle}>Mobile Programming</Text>
            <View style={styles.scheduleTimeContainer}>
              <Text style={styles.scheduleTime}>7:30PM - 9:00PM</Text>
              <Text style={styles.scheduleStatus}>CITC Lab 5</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Container 3 */}
      <View style={styles.container3}>
        <Text style={styles.sectionTitle}>Upcoming Events:</Text>
        <View style={styles.eventCard}>
          <Text style={styles.eventDate}>November 20-26</Text>
          <Text style={styles.eventTitle}>Semi-Final Exam Week</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Index;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 80,
    backgroundColor: 'rgba(245, 245, 245, 0.90)',
  },
  container1: {
    marginBottom: 20,
  },
  container2: {
    marginBottom: 20,
  },
  container3: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greetingContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  greeting: {
    fontSize: 30,
    fontWeight: '400',
  },
  greetingName: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  taskCard: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskLabel: {
    fontSize: 15,
    backgroundColor: '#336A8A',
    color: '#ffffff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 15,
  },
  taskDaysLeft: {
    fontSize: 12,
    color: '#888',
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  taskDescription: {
    marginTop: 15,
    fontSize: 16,
    color: '#555',
  },
  viewDetails: {
    color: '#336A8A',
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
  },
  TitleContainer: {
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  dayLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#336A8A',
    textAlign: 'center',
    marginBottom: 10,
  },
  scheduleCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scheduleCardAlt: {
    backgroundColor: '#3E7595',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scheduleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  scheduleTimeContainer: {
    alignItems: 'flex-end',
  },
  scheduleTime: {
    fontSize: 14,
    color: '#e0e0e0',
  },
  scheduleStatus: {
    fontSize: 14,
    color: '#e0e0e0',
  },
  eventCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 25,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#333',
    borderWidth: 1,
  },
  eventDate: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  eventTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});
