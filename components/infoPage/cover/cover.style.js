import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants/index";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
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
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginStart: SIZES.large,
  },
  subTitleText: {
    flex: 1,
    fontFamily: FONT.regular,
    marginRight: 0,
    paddingTop: 5,
    alignContent: "flex-end",
    textAlign: "right",
  },
  bulletsText: {
    fontSize: SIZES.small,
    color: COLORS.accents6,
    alignContent: "center",
  },
});

export default styles;
