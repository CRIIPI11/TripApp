import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  barContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.accents6,
    padding: SIZES.small,
    height: 80,
  },
  itemWrapper: {
    marginEnd: SIZES.large,
    alignItems: "center",
  },
  icon: {
    width: 35,
    height: 35,
  },
  itemName: {
    marginTop: SIZES.xxSmall,
    fontSize: SIZES.xSmall,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export { styles };
