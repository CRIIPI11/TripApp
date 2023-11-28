import { TouchableOpacity, Text, View } from "react-native";
import styles from "./viewButtons.style";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useActiveTripStore } from "../../../hooks/useActiveTripStore";

const getStoredPlacesData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("selPlaces");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Error retrieving data", e);
  }
};

export const ViewButtons = () => {
  const router = useRouter();
  const { ActivateTrip } = useActiveTripStore();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          //get first place's location from local storage and pass it to navigation
          getStoredPlacesData().then((data) => {
            console.log(data);
            ActivateTrip({ places: data, name: "test" });
            router.push({
              pathname: "/navigation/",
              params: {
                lat: data[0].location.lat,
                lng: data[0].location.lng,
              },
            });
          });
        }}
        style={styles.buttonContainer}
      >
        <Text style={styles.text}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.buttonContainer}>
        <Text style={styles.text}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};
