import { Dimensions, StyleSheet, Platform } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants/index";

const { width, height } = Dimensions.get("window");

const styles =
  Platform.OS === "web"
    ? StyleSheet.create({
        recomContainer: { marginTop: SIZES.large, padding: SIZES.medium },
        titleText: {
          fontFamily: FONT.homenaje,
          fontSize: SIZES.xxLarge,
          textDecorationLine: "underline",
        },
        cardsConatiner: { flexDirection: "row", flexWrap: "wrap" },
        cardContainer: { width: 250, margin: SIZES.small },
        image: {
          width: "100%",
          height: 150,
          borderRadius: SIZES.large,
          marginBottom: SIZES.xxSmall,
        },
        nameText: {
          fontFamily: FONT.homenaje,
          fontWeight: "bold",
          fontSize: SIZES.large,
          marginStart: SIZES.xSmall,
        },
        descText: {
          fontFamily: FONT.homenaje,
          fontSize: SIZES.medium,
          marginStart: SIZES.xxSmall,
          color: COLORS.gray,
        },
      })
    : StyleSheet.create({
        recomContainer: { marginTop: SIZES.large, padding: SIZES.medium },
        titleText: {
          fontFamily: FONT.homenaje,
          fontSize: SIZES.xxLarge,
          textDecorationLine: "underline",
        },
        cardsConatiner: { flexDirection: "row", flexWrap: "wrap" },
        cardContainer: { width: 200, margin: SIZES.small },
        image: {
          width: "100%",
          height: 150,
          borderRadius: SIZES.large,
          marginBottom: SIZES.xxSmall,
        },
        nameText: {
          fontFamily: FONT.homenaje,
          fontWeight: "bold",
          fontSize: SIZES.large,
          marginStart: SIZES.xSmall,
        },
        descText: {
          fontFamily: FONT.homenaje,
          fontSize: SIZES.medium,
          marginStart: SIZES.xxSmall,
          color: COLORS.gray,
        },
      });

export default styles;
