import { FlatList, View } from "react-native";
import OptionCard from "../optionCard/OptionCard";
import { useState } from "react";
import { COLORS } from "../../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Store places data in local storage after deleting a place
const storePlacesData = async (placesData) => {
  try {
    const jsonValue = JSON.stringify(placesData);
    await AsyncStorage.setItem("places", jsonValue);
  } catch (e) {
    console.error("Error storing places data", e);
  }
};

const List = ({ places, view }) => {
  const [plcs, setPlcs] = useState(places);

  //delete a place from the list
  const deletePlace = (place) => {
    setPlcs(plcs.filter((plc) => plc.place !== place));
    storePlacesData(plcs.filter((plc) => plc.place !== place));
  };

  return (
    <View
      style={{ backgroundColor: COLORS.white, height: view ? "90%" : "83%" }}
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
