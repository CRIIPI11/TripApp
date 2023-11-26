import { View, Text } from "react-native";
import styles from "./tripInformation.style";
import { useActiveTripStore } from "../../hooks/useActiveTripStore";

const TripInformation = () => {
  const { trip } = useActiveTripStore();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{trip.name}</Text>
      <View style={styles.subContainer}>
        <Text style={styles.text}>Stops: {trip.places.length}</Text>
      </View>
      <Text style={styles.text} numberOfLines={1}>
        Next Stop: {trip.places[0].place}
      </Text>
    </View>
  );
};

export default TripInformation;
