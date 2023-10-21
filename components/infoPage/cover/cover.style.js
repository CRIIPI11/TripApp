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
          flex:1,
          flexDirection: "row",
          flexWrap: "wrap",
          marginStart: SIZES.large,
          marginEnd: SIZES.large,
          justifyContent: "center", 
          alignItems: "center",
        },
        subTitleText: { fontFamily: FONT.regular, marginLeft: SIZES.xxSmall },
        bulletsText: { fontSize: SIZES.small, color: COLORS.accents6 },
      })
    : StyleSheet.create({
        coverContainer: { padding: SIZES.large },
        image: {
          width: "100%",
          height: height * 0.2,
          borderRadius: SIZES.large,
        },
        subTitleContainer: {
          width: "100%",
          flexDirection: "row",
          padding: SIZES.small,
          paddingBottom: 2,
        },
        bulletsContainer: {
          flex:1,
          flexDirection: "row",
          flexWrap: "wrap",
          marginStart: SIZES.large,
        },
        subTitleText: {flex:1, fontFamily: FONT.regular, marginRight:0, paddingTop: 5, alignContent: 'flex-end', textAlign: 'right'},
        bulletsText: { fontSize: SIZES.small, color: COLORS.accents6, alignContent: 'center'},
      });

export default styles;
