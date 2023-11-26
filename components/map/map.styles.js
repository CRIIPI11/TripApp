import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  map: {
    height: "88%",
    width: "100%",
  },
  navContainer: {
    position: "absolute",
    justifyContent: "center",
    width: 40,
    height: 40,
    // bottom: 0,
    right: 0,
    margin: 30,
    backgroundColor: COLORS.accents8,
    borderRadius: 10,
  },
  nav: {
    alignSelf: "center",
    width: 25,
    height: 25,
  },
});

export default styles;
