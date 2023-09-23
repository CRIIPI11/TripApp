import { StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  barContainer: {
    backgroundColor: COLORS.white,
    marginTop: SIZES.xSmall,
    height: 50,
    ...SHADOWS.bar,
  },
  itemWrapper: {
    marginEnd: SIZES.medium,
    padding: SIZES.xxSmall,
  },
  icon: {
    width: 40,
    height: 40,
  },
});

const stylesWeb = StyleSheet.create({
  barContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLORS.lightWhite,
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
