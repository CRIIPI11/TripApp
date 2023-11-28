import { Text, FlatList, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./tripCard.style";

const storePlacesData = async (key, placesData) => {
  try {
    const jsonValue = JSON.stringify(placesData);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error("Error storing places data", e);
  }
};

const TripCard = ({ userTrips }) => {
  const router = useRouter();

  const fetchUserTrips = async (id) => {
    try {
      const response = await fetch(
        `${process.env.LOCAL_API_URL}Trips/getTrip/${id}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data.trip.stops);
      await storePlacesData("selPlaces", data.trip.stops);
      await storePlacesData("TripName", data.trip.tripName);
      await storePlacesData("TripId", id);
      router.push({ pathname: "/routeList/", params: { view: true } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FlatList
      data={userTrips}
      horizontal={false}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            style={styles.card}
            key={item.tripName}
            activeOpacity={1}
            onPress={() => {
              fetchUserTrips(item.objectId);
            }}
          >
            <Text style={styles.title}>{item.tripName}</Text>
            <Text style={styles.stops}>Number of Stops: {item.stopCount}</Text>
          </TouchableOpacity>
        );
      }}
      indicatorStyle={"black"}
    />
  );
};

export default TripCard;
