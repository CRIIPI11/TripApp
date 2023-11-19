import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./options.style";
import { useRouter } from "expo-router";
const Options = ({ location }) => {
  const router = useRouter();

  return (
    <View style={styles.optionsContainer}>
      {/* <TouchableOpacity
        onPress={() => {
          router.push({
            pathname: "/routeList/",
            params: { lat: location.lat, lng: location.lng, plan: true },
          });
        }}
        style={styles.buttonContainer}
      >
        <Text style={styles.optionText}>Plan Trip</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => {
          router.push({
            pathname: "../(info)/tripSettings",
            params: { lat: location.lat, lng: location.lng, plan: true },
          });
        }}
        style={styles.buttonContainer}
      >
        <Text style={styles.optionText}>Plan Trip</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          router.push({
            pathname: "/navigation/",
            params: { lat: location.lat, lng: location.lng },
          });
        }}
        style={styles.buttonContainer}
      >
        <Text style={styles.optionText}>Visit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.buttonContainer}>
        <Text style={styles.optionText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Options;
