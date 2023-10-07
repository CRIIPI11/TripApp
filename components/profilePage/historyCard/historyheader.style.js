import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  historyContainer: {
    padding: 15,
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
  },
  infoContainer: {
    padding: 10,
    backgroundColor: COLORS.accents7,
    borderRadius: 15,
  },
  infoText: {
    fontSize: 15,
    padding: 5,
    color: COLORS.accents1,
  },
});

export default styles;
