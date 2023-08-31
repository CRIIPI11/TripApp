import { StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS } from "../../../constants";
import { Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    margin: Platform.OS === "web" ? SIZES.medium : 0,
    justifyContent: "center",
  },
});

const stylesWeb = StyleSheet.create({});

export { styles, stylesWeb };
