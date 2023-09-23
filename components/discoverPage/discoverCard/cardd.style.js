import { Dimensions, StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS, FONT } from "../../../constants";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  cardContainer: { padding: SIZES.xSmall, height: height * 0.6 },
  subCarContainer: {
    width: width * 0.95,
    height: "100%",
    marginEnd: SIZES.xxSmall,
  },
  titletext: {
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.homenaje,
    textDecorationLine: "underline",
    marginBottom: SIZES.xxSmall,
  },
  image: {
    width: "100%",
    height: "78%",
    borderRadius: SIZES.medium,
    marginBottom: SIZES.xxSmall,
  },
  placeTitle: {
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.homenaje,
    marginStart: SIZES.xxSmall,
  },
  desc: { fontFamily: FONT.homenaje, color: COLORS.secondary },
  NRContainer: { flexDirection: "row", justifyContent: "space-between" },
  ratingContainer: { flexDirection: "row", alignItems: "baseline" },
  ratingText: {
    fontFamily: FONT.homenaje,
    marginEnd: SIZES.xxSmall,
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  icon: { width: 20, height: 20 },
});

const stylesWeb = StyleSheet.create({
  cardContainer: {
    margin: SIZES.medium,
  },
  subCardsCont: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-evenly",
  },
  subCarContainer: {
    width: width / 7,
    height: height / 2.4,
    marginBottom: SIZES.medium,
  },
  titletext: {
    fontSize: 40,
    fontFamily: FONT.homenaje,
    textDecorationLine: "underline",
    marginBottom: SIZES.medium,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: SIZES.medium,
    marginBottom: SIZES.xxSmall,
  },
  placeTitle: {
    fontFamily: FONT.homenaje,
    fontSize: 25,
    fontWeight: "bold",
  },
  desc: {
    color: COLORS.gray,
    padding: SIZES.xxSmall,
  },
  NRContainer: {
    flexDirection: "row",
    paddingLeft: 3,
    paddingRight: SIZES.small,
    justifyContent: "space-between",
  },
  ratingContainer: { flexDirection: "row", alignItems: "baseline" },
  ratingText: {
    fontFamily: FONT.homenaje,
    marginEnd: SIZES.xxSmall,
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  icon: { width: 20, height: 20 },
});

export { styles, stylesWeb };
