import { Image, FlatList, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./filterbar.style";
import { icons } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../redux/filterSlice";

const DATA = [
  {
    id: "museums",
    title: "Museums",
    icon: icons.museum,
  },
  {
    id: "art gallery",
    title: "Art & Culture",
    icon: icons.art,
  },
  {
    id: "Landmark",
    title: "Architecture",
    icon: icons.arch,
  },
  {
    id: "Sculpture",
    title: "Roadside Attractions",
    icon: icons.sign,
  },
  {
    id: "park",
    title: "Nature",
    icon: icons.nature,
  },
  {
    id: "Historical Landmark",
    title: "History",
    icon: icons.history,
  },
];

const Item = ({ icon, category, id }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);
  return (
    <TouchableOpacity
      style={
        filter === id
          ? [styles.itemWrapper, { borderBottomWidth: 2, borderColor: "#ff" }]
          : styles.itemWrapper
      }
      onPress={() => {
        dispatch(setFilter(id));
      }}
    >
      <Image source={icon} style={styles.icon} />
      <Text style={styles.itemName}>{category}</Text>
    </TouchableOpacity>
  );
};

const FilterBar = ({}) => {
  return (
    <View style={styles.barContainer}>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={({ item }) => (
          <Item icon={item.icon} category={item.title} id={item.id} />
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        fadingEdgeLength={50}
      />
    </View>
  );
};

export default FilterBar;
