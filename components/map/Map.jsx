import React from "react";
import MapView from "react-native-maps";
import styles from "./map.styles";

const Map = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 40.519727,
        longitude: -74.276041,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default Map;
