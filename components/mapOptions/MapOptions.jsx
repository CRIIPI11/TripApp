import { View, TouchableOpacity, Text } from "react-native";
import styles from "./mapOptions.style";
import { useActiveTripStore } from "../../hooks/useActiveTripStore";
import { useRouter } from "expo-router";

const MapOptions = () => {
  const { trip, EndTrip } = useActiveTripStore();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push({
            pathname: "/navigation/",
            params: {
              lat: trip.places[0].location.lat,
              lng: trip.places[0].location.lng,
            },
          });
        }}
      >
        <Text style={styles.text}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          EndTrip();
        }}
      >
        <Text style={styles.text}>End Trip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MapOptions;
