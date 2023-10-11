import { Text, View } from "react-native";
import style from "./historyheader.style";
import { useSelector } from "react-redux";

const HistoryCard = () => {
  const user = useSelector((state) => state.user);
  return (
    <View style={style.historyContainer}>
      <Text style={style.title}>History</Text>
      <View style={style.infoContainer}>
        <Text style={style.infoText}>Trips Completed: {user.tripsCounter}</Text>
        <Text style={style.infoText}>Places Visited: {user.placesVisited}</Text>
        <Text style={style.infoText}>Favorite Category:</Text>
      </View>
    </View>
  );
};

export default HistoryCard;
