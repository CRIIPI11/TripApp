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
    padding: 20,
  },
  editText: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
  },
  optionInput: {
    borderBottomWidth: 1,
    borderColor: "#000",
    width: "50%",
    fontSize: 18,
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
    backgroundColor: COLORS.primary,
  },
  footText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    padding: 5,
  },
});

export default styles;
