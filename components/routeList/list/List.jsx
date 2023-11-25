import { FlatList, View } from "react-native";
import OptionCard from "../optionCard/OptionCard";
import { useState } from "react";
import { COLORS } from "../../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Store places data in local storage after deleting a place
const storePlacesData = async (placesData, place) => {
  try {
    //update selected places
    const stringValue = JSON.stringify(placesData);
    await AsyncStorage.setItem("selPlaces", stringValue);
    //update remaining places
    const jsonValue = await AsyncStorage.getItem("remPlaces");
    const remPlaces = JSON.parse(jsonValue);
    remPlaces.push(place);
    const stringValue2 = JSON.stringify(remPlaces);
    await AsyncStorage.setItem("remPlaces", stringValue2);
  } catch (e) {
    console.error("Error storing places data", e);
  }
};

const List = ({ places, view }) => {
  const [plcs, setPlcs] = useState(places);

  //delete a place from the list
  const deletePlace = (place) => {
    setPlcs(plcs.filter((plc) => plc.place !== place));
    storePlacesData(plcs.filter((plc) => plc.place !== place, place));
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
            vicinity={item.item.vicinity}
            delet={deletePlace}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default List;
