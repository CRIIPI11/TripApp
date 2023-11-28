import { View } from "react-native";
import { useLocationStore } from "../../hooks";
import { useRef } from "react";
import styles from "./map.styles";
//---
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps/lib/ProviderConstants";
import { useActiveTripStore } from "../../hooks/useActiveTripStore";

const Map = () => {
  const { location } = useLocationStore();
  const { trip } = useActiveTripStore();

  const camRef = useRef(null);

  return (
    <View>
      <MapView
        ref={camRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: location.location.lat,
          longitude: location.location.lng,
          latitudeDelta: 1.5922,
          longitudeDelta: 0.0821,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
        rotateEnabled={false}
      >
        {trip.places.map((place, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: place.location.lat,
              longitude: place.location.lng,
            }}
            title={place.name}
            description={place.address}
          ></Marker>
        ))}
      </MapView>
    </View>
  );
};

export default Map;
