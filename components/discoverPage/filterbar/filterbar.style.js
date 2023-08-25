import { StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  barContainer: {
    backgroundColor: COLORS.lightWhite,
    marginTop: SIZES.xSmall,
    ...SHADOWS.bar,
  },
  itemWrapper: {
    borderRadius: SIZES.small,
    margin: SIZES.xxSmall,
    marginEnd: SIZES.medium,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: SIZES.small / 1.25,
  },
});

const stylesWeb = StyleSheet.create({
  barContainer: {
    backgroundColor: COLORS.lightWhite,
    marginTop: SIZES.xSmall,
    ...SHADOWS.bar,
  },
  itemWrapper: {
    borderRadius: SIZES.small,
    margin: SIZES.xxSmall,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: SIZES.small / 1.25,
  },
});

export { styles, stylesWeb };
