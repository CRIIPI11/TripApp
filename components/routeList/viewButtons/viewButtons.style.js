import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 50,
    marginTop: 20,
  },
  buttonContainer: {
    backgroundColor: "#86ffb6",
    borderRadius: 10,
    padding: 10,
    width: "32%",
  },
  text: {
    color: COLORS.accents1,
    textAlign: "center",
  },
});

export default styles;
