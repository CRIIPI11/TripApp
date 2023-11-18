import { FlatList, Text, View, TouchableOpacity } from "react-native";
import OptionCard from "../optionCard/OptionCard";
import styles from "./list.style";
import { useState } from "react";
import { COLORS } from "../../../constants";

const List = ({ places, view }) => {
  const [plcs, setPlcs] = useState(places);

  const deletePlace = (place) => {
    setPlcs(plcs.filter((plc) => plc.place !== place));
  };

  return (
    <View
      style={{ backgroundColor: COLORS.white, height: view ? "100%" : "83%" }}
    >
      <FlatList
        data={plcs}
        renderItem={(item) => (
          <OptionCard
            key={item.index}
            name={item.item.place}
            img={item.item.img.url}
            types={item.item.types}
            delet={deletePlace}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default List;
