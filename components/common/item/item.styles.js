import { StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: SIZES.small / 1.25,
  },
});

export default styles;
