import { StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS } from "../../../constants";
import { Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    margin: Platform.OS === "web" ? SIZES.medium : 0,
    justifyContent: "center",
  },
});

export { styles };
