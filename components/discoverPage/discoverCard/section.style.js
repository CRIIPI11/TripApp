import { Dimensions, StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS, FONT } from "../../../constants";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  cardContainer: { padding: SIZES.xSmall },
  subCarContainer: {
    width: width * 0.94,
    marginEnd: SIZES.xxSmall,
  },
  titletext: {
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.homenaje,
    textDecorationLine: "underline",
    marginBottom: SIZES.medium,
  },
  errorConatainer: { padding: SIZES.large },
  errortexttitle: {
    fontFamily: FONT.homenaje,
    fontSize: SIZES.xxLarge,
    textAlign: "center",
  },
  errortextmsg: {
    paddingStart: SIZES.small,
    paddingEnd: SIZES.small,
    fontSize: SIZES.medium,
    color: COLORS.accents4,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: SIZES.medium,
    marginBottom: SIZES.xxSmall,
  },
  placeTitle: {
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.homenaje,
    marginTop: SIZES.xxSmall,
  },
  desc: {
    fontFamily: FONT.homenaje,
    color: COLORS.accents5,
    marginTop: SIZES.xxSmall,
  },
  NRContainer: { flexDirection: "row", justifyContent: "space-between" },
  titleContainer: { width: "65%" },
  ratingContainer: { flexDirection: "row", alignItems: "center" },
  ratingText: {
    marginEnd: SIZES.xxSmall,
    fontSize: SIZES.medium,
    color: COLORS.accents2,
  },
  icon: { width: 15, height: 15, marginEnd: 4 },
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
  errorConatainer: { padding: SIZES.large },
  errortexttitle: {
    fontFamily: FONT.homenaje,
    fontSize: SIZES.xxLarge,
    textAlign: "center",
  },
  errortextmsg: {
    paddingStart: SIZES.small,
    paddingEnd: SIZES.small,
    fontSize: SIZES.medium,
    color: COLORS.accents4,
    textAlign: "center",
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
    color: COLORS.accents6,
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
    color: COLORS.accents6,
  },
  icon: { width: 20, height: 20 },
});

export { styles, stylesWeb };
