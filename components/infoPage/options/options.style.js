import { StyleSheet } from "react-native";
import { FONT, SIZES } from "../../../constants/index";

const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    marginTop: SIZES.xxLarge,
  },
  buttonContainer: {
    backgroundColor: "#60fca4",
    paddingHorizontal: SIZES.large,
    paddingTop: SIZES.xxSmall,
    paddingBottom: SIZES.xxSmall,
    borderRadius: SIZES.small,
    borderWidth: 0,
    border: "black",
  },
  optionText: { fontSize: SIZES.medium, fontFamily: FONT.medium },
});

export default styles;
