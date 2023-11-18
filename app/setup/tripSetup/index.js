import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { useAlgo } from "../../../hooks/useAlgo";

const TripLoader = () => {
    const router = useRouter();
    const { places, loading, getPlaces } = useAlgo();

    const storePlacesData = async (placesData) => {
        try {
            const jsonValue = JSON.stringify(placesData);
            await AsyncStorage.setItem("places", jsonValue);
        } catch (e) {
            console.error("Error storing places data", e);
        }
    }


    /*
        USE THE FOLLOWING CODE TO OBTAIN THIS PLACES DATA FROM ASYNC STORAGE ON ANOTHER FILE

        const getStoredPlacesData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('places');
                return jsonValue != null ? JSON.parse(jsonValue) : null;
            } catch (e) {
                console.error("Error retrieving data", e);
            }
        };

    */

    useEffect(() => {
        getPlaces("37.785875131445955", "-122.44649575020367"); // TODO: Take destination coords from trip list page
    }, []);

    if (!loading) { // Run once loading indicator from useAlgo returns false
        console.log(`Places: ${places[0]?.places[0]?.guevoPlaces[0]?.place}`);
        storePlacesData(places);

        if (places.length > 0) {
            //console.log(`I have executed. Places: ${JSON.stringify(places)}`);
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
        alignItems: "center"
    },
    loadingContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16
    }
})

export default TripLoader;