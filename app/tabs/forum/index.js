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
  const TRIPS_URL = `${process.env.LOCAL_API_URL}${process.env.TRIPS_ENDPOINT}`;
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    const fetchUserTrips = async () => {
      try {
        const response = await fetch(TRIPS_URL, { method: 'GET' });
        const data = await response.json();
        setUserTrips(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchUserTrips();
  }, []);

  console.log(userTrips);

  return (
    <SafeAreaView>
      <Text style={styles.header}>My Trips</Text>
      <View>
        <TripCard userTrips={userTrips.trips} />
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