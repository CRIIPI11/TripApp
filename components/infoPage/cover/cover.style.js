import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants/index";
import { Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const styles =
  Platform.OS === "web"
    ? StyleSheet.create({
        coverContainer: {
          padding: SIZES.large,
          width: "100%",
          alignSelf: "center",
        },
        image: {
          width: "100%",
          height: 400,
          borderRadius: SIZES.large,
          alignSelf: "center",
        },
        subTitleContainer: {
          flexDirection: "row",
          padding: SIZES.small,
          paddingBottom: 2,
        },
        bulletsContainer: {
          flexDirection: "row",
          flexWrap: "wrap",
          marginStart: SIZES.large,
          marginEnd: SIZES.large,
        },
        subTitleText: { fontFamily: FONT.regular, marginLeft: SIZES.xxSmall },
        bulletsText: { fontSize: SIZES.small, color: COLORS.accents6 },
        icon: { width: 15, height: 15 },
      })
    : StyleSheet.create({
        coverContainer: { padding: SIZES.large },
        image: {
          width: "100%",
          height: height * 0.2,
          borderRadius: SIZES.large,
        },
        subTitleContainer: {
          flexDirection: "row",
          padding: SIZES.small,
          paddingBottom: 2,
        },
        bulletsContainer: {
          flexDirection: "row",
          flexWrap: "wrap",
          marginStart: SIZES.large,
          marginEnd: SIZES.large,
        },
        subTitleText: { fontFamily: FONT.regular, marginLeft: SIZES.xxSmall },
        bulletsText: { fontSize: SIZES.small, color: COLORS.accents6 },
        icon: { width: 15, height: 15 },
      });

export default styles;
