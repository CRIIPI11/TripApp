import { StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS, FONT } from "../../../constants";

const styles = StyleSheet.create({
  cardContainer: { padding: SIZES.xSmall, height: 500 },
  subCarContainer: { maxWidth: 390, height: 80, marginEnd: SIZES.xSmall },
  titletext: {
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.homenaje,
    textDecorationLine: "underline",
    marginBottom: SIZES.xxSmall,
  },
  image: {
    width: "100%",
    height: 350,
    borderRadius: SIZES.medium,
    marginBottom: SIZES.xxSmall,
  },
  placeTitle: {
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.homenaje,
    fontWeight: "bold",
    marginStart: SIZES.xxSmall,
  },
  desc: { fontFamily: FONT.homenaje, color: COLORS.secondary },
  NRContainer: { flexDirection: "row" },
  nameContainer: { flex: 1 },
  ratingContainer: { flexDirection: "row", alignItems: "baseline" },
  ratingText: {
    fontFamily: FONT.homenaje,
    marginEnd: SIZES.xxSmall,
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  icon: { width: 20, height: 20 },
});

const stylesWeb = StyleSheet.create({});

export { styles, stylesWeb };
