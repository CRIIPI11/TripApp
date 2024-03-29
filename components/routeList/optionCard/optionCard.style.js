import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: COLORS.accents7,
    margin: 10,
    elevation: 5,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  img: { width: 150, height: "100%", resizeMode: "cover" },
  infoContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    color: COLORS.accents1,
    marginBottom: 10,
  },
  typesContainer: {
    flexDirection: "row",
  },
  tagItem: {
    backgroundColor: COLORS.tertiary,
    borderRadius: 10,
    padding: 5,
    margin: 5,
  },
  textContainer: {
    color: COLORS.accents1,
    fontSize: 12,
  },
});

export default styles;
