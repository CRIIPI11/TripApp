import { TouchableOpacity, Text, View } from "react-native";
import styles from "./listButtons.style";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

//retrieve places data from local storage to pass first place's location to navigation
const getStoredPlacesData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("places");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Error retrieving data", e);
  }
};

export const ListButtons = () => {
  const router = useRouter();

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
      <TouchableOpacity onPress={() => {}} style={styles.buttonContainer}>
        <Text style={styles.text}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          //get first place's location from local storage and pass it to navigation
          getStoredPlacesData().then((data) => {
            console.log(data);
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
        <Text style={styles.text}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};
