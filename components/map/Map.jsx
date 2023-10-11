import { View, Text, Image } from "react-native";
import {
  Camera,
  MapView,
  MarkerView,
  PointAnnotation,
  UserLocation,
} from "@rnmapbox/maps";
import Mapbox from "@rnmapbox/maps";
import { useUserStore } from "../../hooks";
import { TouchableOpacity } from "react-native";
import { useRef, useState } from "react";
import { icons } from "../../constants";
import styles from "./map.styles";
import PermissionDenied from "../common/permissionModal/PermissionDenied";

Mapbox.setAccessToken(process.env.mapbox_pk);

const Map = () => {
  const { location } = useUserStore();
  const [alert, setAlert] = useState(false);

  const camRef = useRef(null);

  const centerCamera = () => {
    // camRef.current.flyTo(
    //   [location?.location?.long, location?.location?.lat],
    //   1500
    // );
    //  camRef.current.zoomTo(13);
    location.permission === "granted"
      ? camRef.current.setCamera({
          centerCoordinate: [location?.location?.long, location?.location?.lat],
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
                location?.location?.long,
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
