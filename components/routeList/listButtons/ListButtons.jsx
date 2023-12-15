import { TouchableOpacity, Text, View } from "react-native";
import styles from "./listButtons.style";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useActiveTripStore } from "../../../hooks/useActiveTripStore";
import { Alert } from "react-native";
//retrieve places data from local storage to pass first place's location to navigation
const getStoredPlacesData = async () => {
  try {
    const jsonPlaces = await AsyncStorage.getItem("selPlaces");
    const jsonNames = await AsyncStorage.getItem("TripName");
    const jsonCategroies = await AsyncStorage.getItem("categories");
    const returnPlaces = jsonPlaces != null ? JSON.parse(jsonPlaces) : null;
    const returnName = jsonNames != null ? JSON.parse(jsonNames) : null;
    const returnCategories =
      jsonCategroies != null ? JSON.parse(jsonCategroies) : null;
    return { returnPlaces, returnName, returnCategories };
  } catch (e) {
    console.error("Error retrieving data", e);
  }
};

export const ListButtons = () => {
  const router = useRouter();
  const { ActivateTrip } = useActiveTripStore();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          router.push("tabs/discover/(info)");
        }}
        style={styles.buttonContainer}
      >
        <Text style={styles.text}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          getStoredPlacesData().then((data) => {
            axios
              .post(`${process.env.LOCAL_API_URL}Trips/create`, {
                tripName: data.returnName,
                destination: JSON.stringify(
                  data.returnPlaces[data.returnPlaces.length - 1].location
                ),
                stopCount: data.returnPlaces.length,
                stops: data.returnPlaces,
                categories: data.returnCategories,
              })
              .then(function (response) {
                console.log(response.status);
                Alert.alert("Trip Successfully Saved");
                router.push("tabs/savedTrips/");
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
        <Text style={styles.text}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};
