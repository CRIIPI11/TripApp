import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants/index";
import { Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const styles =
  Platform.OS === "web"
    ? StyleSheet.create({
        optionsContainer: {
          flexDirection: "row",
          justifyContent: "space-between",
          width: "60%",
          alignSelf: "center",
          marginTop: SIZES.xxLarge,
        },
        buttonContainer: {
          backgroundColor: "#76c40d",
          paddingStart: SIZES.medium,
          paddingEnd: SIZES.medium,
          paddingTop: SIZES.xxSmall,
          paddingBottom: SIZES.xxSmall,
          borderRadius: SIZES.xxLarge,
          borderWidth: 1,
          border: "black",
        },
        optionText: { fontSize: SIZES.medium, fontFamily: FONT.medium },
      })
    : StyleSheet.create({
        optionsContainer: {
          flexDirection: "row",
          justifyContent: "space-between",
          width: "60%",
          alignSelf: "center",
          marginTop: SIZES.xxLarge,
        },
        buttonContainer: {
          backgroundColor: "#76c40d",
          paddingStart: SIZES.medium,
          paddingEnd: SIZES.medium,
          paddingTop: SIZES.xxSmall,
          paddingBottom: SIZES.xxSmall,
          borderRadius: SIZES.xxLarge,
          borderWidth: 1,
          border: "black",
        },
        optionText: { fontSize: SIZES.medium, fontFamily: FONT.medium },
      });

export default styles;
