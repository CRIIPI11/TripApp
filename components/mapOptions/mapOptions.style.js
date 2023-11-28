import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 35,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: COLORS.accents8,
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button: {
    backgroundColor: "#86ffb6",
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  text: {
    color: COLORS.accents1,
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default styles;
