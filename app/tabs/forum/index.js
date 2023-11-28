import React from "react";
import { SafeAreaView } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import TripCard from "../../../components/trips/tripCard";
import { icons } from "../../../constants";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ForumPage = () => {
  const TRIPS_URL = `http://10.203.248.13:1337/Trips/getTrip`;
  const [userTrips, setUserTrips] = useState([]);

  const storePlacesData = async (key, placesData) => {
    try {
      const jsonValue = JSON.stringify(placesData);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.error("Error storing places data", e);
    }
  };

  storePlacesData("userTrips", userTrips);

  useEffect(() => {
    const fetchUserTrips = async () => {
      try {
        const response = await fetch(TRIPS_URL, { method: "GET" });
        const data = await response.json();
        setUserTrips(data.trips);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserTrips();
  }, []);

  return (
    <SafeAreaView>
      <Text style={styles.header}>My Trips</Text>
      <View>
        <TripCard userTrips={userTrips} />
      </View>
    </SafeAreaView>
  );
};

//gonna clean up the styling later, need to set the functionality up first
const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#000",
    marginTop: 20,
    padding: 20,
    marginBottom: 10,
  },
});

export default ForumPage;
