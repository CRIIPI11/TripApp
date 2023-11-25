import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert } from "react-native";
import { useRouter, useSearchParams } from "expo-router";
import MapboxNavigation from "rnc-mapbox-nav";
import { useLocationStore } from "../../hooks";
import { useState } from "react";

const navigation = () => {
  const { lat, lng } = useSearchParams();
  const { location } = useLocationStore();
  const [start, setStart] = useState(true);
  console.log(lat, lng, location.location.lat, location.location.lng);
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {start && (
        <MapboxNavigation
          origin={[location.location.lng, location.location.lat]}
          destination={[Number(lng), Number(lat)]}
          //   shouldSimulateRoute
          onLocationChange={(event) => {
            const { latitude, longitude } = event.nativeEvent;
          }}
          onCancelNavigation={() => {
            Alert.alert("Cancel", "Navigation Was Canceled", [
              {
                text: "ok",
                onPress: () => router.push("tabs/forum/"),
                style: "cancel",
              },
            ]);
          }}
          onArrive={() => {
            // Called when you arrive at the destination.
          }}
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </SafeAreaView>
  );
};

export default navigation;
