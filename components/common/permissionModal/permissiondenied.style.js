import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  alertContainer: {
    position: "absolute",
    top: "35%",
    alignSelf: "center",
    width: "90%",
    backgroundColor: COLORS.accents8,
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.accents6,
  },
  closeButtom: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: { width: 20, height: 20 },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: COLORS.accents1,
  },
  body: {
    alignItems: "center",
    padding: 40,
  },
  navIcon: {
    width: 25,
    height: 25,
    margin: 10,
  },
  msgText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: COLORS.accents1,
  },
});

export default styles;
