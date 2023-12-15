import { StyleSheet } from "react-native";
import { FONT, SIZES } from "../../../constants/index";

const styles = StyleSheet.create({
  recomContainer: {
    flex: 1,
    padding: SIZES.medium,
    justifyContent: "flex-start",
  },
  titleText: {
    marginTop: 0,
    paddingTop: 0,
    fontFamily: FONT.homenaje,
    fontSize: SIZES.large,
    textDecorationLine: "underline",
  },
  cardsConatiner: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cardContainer: {
    width: "100%",
    height: "100%",
    margin: SIZES.small,
    marginLeft: 0,
  },
  image: {
    width: 120,
    height: 100,
    borderRadius: SIZES.large,
    marginBottom: SIZES.xxSmall,
    alignSelf: "center",
  },
  nameText: {
    fontFamily: FONT.homenaje,
    fontSize: SIZES.medium,
    textAlign: "center",
    width: 120,
  },
});

export default styles;
