import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants/index";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  recomContainer: { marginTop: SIZES.large, padding: SIZES.medium },
  cardsConatiner: {
    flexDirection: "column",
    flexWrap: "wrap",
    height: height * 0.6,
  },
  cardContainer: {
    width: width,
    height: 130,
    backgroundColor: COLORS.white,
    marginBottom: 0,
    padding: 10,
    elevation: 0,
    flexDirection: "row",
  },
  imageContainer: {
    width: "40%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.large,
    marginBottom: SIZES.xxSmall,
  },
  textContainer: {
    width: "55%",
    paddingLeft: 10,
    paddingTop: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  nameText: {
    fontFamily: FONT.homenaje,
    fontWeight: "bold",
    fontSize: SIZES.large,
    marginStart: SIZES.xSmall,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  descText: {
    fontFamily: FONT.homenaje,
    fontSize: SIZES.medium,
    marginStart: SIZES.xxSmall,
    color: COLORS.accents6,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
});

export default styles;
