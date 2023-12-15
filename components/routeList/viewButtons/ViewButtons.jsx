import { TouchableOpacity, Text, View, Alert } from "react-native";
import styles from "./viewButtons.style";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useActiveTripStore } from "../../../hooks/useActiveTripStore";
import axios from "axios";

const getStoredPlacesData = async () => {
  try {
    const jsonPlaces = await AsyncStorage.getItem("selPlaces");
    const jsonId = await AsyncStorage.getItem("TripId");
    const returnPlaces = jsonPlaces != null ? JSON.parse(jsonPlaces) : null;
    const returnId = jsonId != null ? JSON.parse(jsonId) : null;
    console.log(returnId);
    return { returnPlaces, returnId };
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
            ActivateTrip({ places: data.returnPlaces, name: data.returnName });
            router.push({
              pathname: "/navigation/",
              params: {
                lat: data.returnPlaces[0].location.lat,
                lng: data.returnPlaces[0].location.lng,
              },
            });
          });
        }}
        style={styles.buttonContainer}
      >
        <Text style={styles.text}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          getStoredPlacesData().then((data) => {
            axios
              .put(`${process.env.LOCAL_API_URL}Trips/update/stops`, {
                tripId: data.returnId,
                stops: data.returnPlaces,
                stopCount: data.returnPlaces.length,
              })
              .then(function (response) {
                console.log(response.status);
                Alert.alert("Trip Successfully Updated");
              })
              .catch(function (error) {
                console.log(error);
              });
          });
        }}
        style={styles.buttonContainer}
      >
        <Text style={styles.text}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
