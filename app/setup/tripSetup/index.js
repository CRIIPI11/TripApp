import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { useAlgo } from "../../../hooks/useAlgo";

const TripLoader = () => {
  const router = useRouter();
  const { lat, lng, tripName, categories, stopCount } = useLocalSearchParams();
  const { places, loading, getPlaces } = useAlgo();

  const storePlacesData = async (key, placesData) => {
    try {
      const jsonValue = JSON.stringify(placesData);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.error("Error storing places data", e);
    }
  };

  const selectAndSeparatePlaces = (chunks, stopCount) => {
    let selectedPlaces = [];
    let remainingPlaces = [];
    let totalPlaces = 0;

    // Count total places
    chunks.forEach((chunk) => {
      chunk.places.forEach((place) => {
        totalPlaces += place.guevoPlaces.length;
      });
    });

    const interval = Math.max(1, Math.floor(totalPlaces / stopCount));

    let count = 0;
    chunks.forEach((chunk) => {
      chunk.places.forEach((place) => {
        place.guevoPlaces.forEach((guevoPlace) => {
          if (count % interval === 0 && selectedPlaces.length < stopCount) {
            selectedPlaces.push(guevoPlace);
          } else {
            remainingPlaces.push(guevoPlace);
          }
          count++;
        });
      });
    });

    return { selectedPlaces, remainingPlaces };
  };

  /*
        USE THE FOLLOWING CODE TO OBTAIN THIS PLACES DATA FROM ASYNC STORAGE ON ANOTHER FILE

        const getStoredPlacesData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('places / key name');
                return jsonValue != null ? JSON.parse(jsonValue) : null;
            } catch (e) {
                console.error("Error retrieving data", e);
            }
        };

    */

  useEffect(() => {
    getPlaces(lat, lng, categories);
  }, []);

  if (!loading) {
    // Run once loading indicator from useAlgo returns false
    const { selectedPlaces, remainingPlaces } = selectAndSeparatePlaces(
      places,
      stopCount
    );
    storePlacesData("selPlaces", selectedPlaces); // To be obtained on the next screen
    storePlacesData("remPlaces", remainingPlaces); // List of places that were not selected. places - selPlaces = remPlaces
    storePlacesData("TripName", tripName);
    storePlacesData("categories", categories);

    /*
      The following is for debugging purposes only. Keep commented.
    */

    /*
    // Use a tool like Beyond Compare if you want to compare the two multi-dimensional arrays 
    // and see if even/balanced when selecting chunks based on stopCount.

    console.log(`Places (ALL): ${JSON.stringify(places)}`);
    console.log('---------------------------\n');
    console.log(`Selected Places (ALL): ${JSON.stringify(selectedPlaces)}`);
    console.log('--------------------------\n');
    console.log(`Remaining Places (ALL): ${JSON.stringify(remainingPlaces)}`);
    // storePlacesData(places); // Keep commented. For debugging only.
    */

    /*
      End of debugging code.
    */

    if (places.length > 0) {
      router.replace("routeList"); // Do not use 'push' as we do not want the user to go back to this loading screen
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Getting recommendations...</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default TripLoader;
