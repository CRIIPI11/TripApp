import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.accents8,
    paddingVertical: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    color: COLORS.accents1,
    fontWeight: "bold",
    fontSize: 20,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    marginTop: 5,
  },
});

export default styles;
