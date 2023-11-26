import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../../constants/index";
import Map from "../../../components/map/Map";
import { useActiveTripStore } from "../../../hooks/useActiveTripStore";
import MapOptions from "../../../components/mapOptions/MapOptions";
import TripInformation from "../../../components/mapTripInformation/TripInformation";
import { StyleSheet } from "react-native";

const map = () => {
  const { active } = useActiveTripStore();

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.accents8 }}>
      {active ? (
        <View>
          <TripInformation />
          <Map />
          <MapOptions />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>No Active Trip</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default map;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.accents8,
    height: "100%",
  },
  text: {
    color: COLORS.accents1,
    fontWeight: "bold",
    fontSize: 30,
  },
});
