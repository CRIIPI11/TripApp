import { StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS } from "../../../constants";

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

const stylesWeb = StyleSheet.create({
  barContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLORS.accents8,
    margin: SIZES.medium,
    flexWrap: "wrap",
    height: 60,
    ...SHADOWS.bar,
  },
  itemWrapper: {
    marginEnd: SIZES.xxLarge,
    padding: SIZES.xSmall,
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export { styles, stylesWeb };
