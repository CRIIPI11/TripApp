import { Text, View } from "react-native";
import style from "./historyheader.style";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const HistoryCard = () => {
  const [user, setUser] = useState({});
  const url = process.env.server_url;
  useEffect(() => {
    axios.get(`${url}/Users/me`).then((res) => {
      setUser(res.data);
      console.log(res.data);
    });
  }, []);

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
