import { Text, View } from "react-native";
import style from "./historyheader.style";
const HistoryCard = () => {
  return (
    <View style={style.historyContainer}>
      <Text style={style.title}>History</Text>
      <View style={style.infoContainer}>
        <Text style={style.infoText}>Trips Completed: </Text>
        <Text style={style.infoText}>Places Visited: </Text>
        <Text style={style.infoText}>Favorite Category:</Text>
      </View>
    </View>
  );
};

export default HistoryCard;
