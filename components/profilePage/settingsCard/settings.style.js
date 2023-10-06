import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  settingsContainer: {
    padding: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  optionsContainer: {
    padding: 5,
  },
  optionButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.accents6,
    padding: 5,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default styles;
