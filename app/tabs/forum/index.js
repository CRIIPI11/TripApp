import React from 'react';
import { SafeAreaView } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import TripCard from '../../../components/trips/tripCard';
import { icons } from '../../../constants';
import { useState, useEffect } from 'react';


const DATA = [
  {
    tripName: 'Trip 1',
    stopCount: 5,
    destination: 'New York',
    coords: {lat: 40.7128, lng: -74.0060},
  },
  {
    tripName: 'Trip 2',
    stopCount: 3,
    destination: 'New York',
    coords: {lat: 40.7128, lng: -74.0060},
  },
  {
    tripName: 'Trip 3',
    stopCount: 2,
    destination: 'New York',
    coords: {lat: 40.7128, lng: -74.0060},
  },
  {
    tripName: 'Trip 4',
    stopCount: 1,
    destination: 'New York',
    coords: {lat: 40.7128, lng: -74.0060},
  }
];

const ForumPage = () => {

  //TODO: Get user Trips from database
  //not sure about the endpoints just yet 

  // const [userTrips, setUserTrips] = useState([]);

  // useEffect(() => {
  //   // Function to fetch user trips from the database
  //   const fetchUserTrips = async () => {
  //     try {
  //       // Make an API call to the database endpoint to get user trips
  //       const response = await fetch('DATABASE_ENDPOINT');
  //       const data = await response.json();
  //       setUserTrips(data);
  //     } catch (error) {
  //       console.error('Error fetching user trips:', error);
  //     }
  //   };

  //   // Call the fetchUserTrips function
  //   fetchUserTrips();
  // }, []);


  return (
    <SafeAreaView>
      <Text style={styles.header}>My Trips</Text>
      <View>
        <TripCard userTrips = {DATA} />
      </View>
    </SafeAreaView>
  );
};


//gonna clean up the styling later, need to set the functionality up first
const styles = StyleSheet.create({
  header:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#000',
    marginTop: 20,
    padding: 20,
    marginBottom: 10,
  }


});

export default ForumPage;