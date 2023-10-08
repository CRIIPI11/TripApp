import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  editContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    position: "absolute",
    marginLeft: "5%",
    marginTop: "20%",
    padding: 5,
    width: "100%",
  },
  firstBody: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
    padding: 20,
  },
  body: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderColor: "#000",
    padding: 30,
  },
  editText: {
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 20,
  },
  optionInput: {
    borderBottomWidth: 1,
    borderColor: "#000",
    width: "50%",
  },
  editfooter: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },
  footBut: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    padding: 10,
    backgroundColor: COLORS.primary,
  },
  footText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default styles;
