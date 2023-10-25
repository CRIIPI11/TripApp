import { View, Text, Image } from "react-native";
import {
  Camera,
  MapView,
  MarkerView,
  PointAnnotation,
  UserLocation,
} from "@rnmapbox/maps";
import Mapbox from "@rnmapbox/maps";
import { useLocationStore } from "../../hooks";
import { TouchableOpacity } from "react-native";
import { useRef, useState } from "react";
import { icons } from "../../constants";
import styles from "./map.styles";
import PermissionDenied from "../common/permissionModal/PermissionDenied";

Mapbox.setAccessToken(process.env.mapbox_pk);

const Map = () => {
  const { location } = useLocationStore();
  const [alert, setAlert] = useState(false);

  const camRef = useRef(null);

  const centerCamera = () => {
    location.permission === "granted"
      ? camRef.current.setCamera({
          centerCoordinate: [
            location?.location?.lng,
            location?.location?.lat - 0.02,
          ],
          zoomLevel: 12,
          animationDuration: 2000,
        })
      : setAlert(true);
  };

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        preferredFramesPerSecond={60}
        rotateEnabled={false}
        pitchEnabled={false}
        scrollEnabled={!alert}
        zoomEnabled={!alert}
        styleURL="mapbox://styles/criipi11/clmwhuawa05wa01qb87amba3x"
        scaleBarEnabled={false}
        onMapIdle={(e) => {}}
      >
        {location.permission === "granted" && (
          <>
            <UserLocation />
            <Camera
              ref={camRef}
              zoomLevel={10}
              centerCoordinate={[
                location?.location?.lng,
                location?.location?.lat,
              ]}
            />
          </>
        )}
      </MapView>
      {!alert && (
        <TouchableOpacity onPress={centerCamera} style={styles.navContainer}>
          <Image source={icons.navigationfill} style={styles.nav}></Image>
        </TouchableOpacity>
      )}
      {alert && <PermissionDenied onPress={setAlert} />}
    </View>
  );
};

export default Map;
