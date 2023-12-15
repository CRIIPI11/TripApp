import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import TripCard from "../../../components/trips/tripCard";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SavedTripsPage = () => {
  const TRIPS_URL = `${process.env.LOCAL_API_URL}Trips/getTrip`;
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserTrips = async () => {
      try {
        const response = await fetch(TRIPS_URL, { method: "GET" });
        const data = await response.json();
        setUserTrips(data.trips);
        setLoading(false);
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
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <TripCard userTrips={userTrips} />
        )}
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

export default SavedTripsPage;
