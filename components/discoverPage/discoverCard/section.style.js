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

export { styles };
