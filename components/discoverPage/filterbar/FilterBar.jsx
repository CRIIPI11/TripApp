import {
  Image,
  Platform,
  FlatList,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { styles, stylesWeb } from "./filterbar.style";
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
        Platform.OS == "web"
          ? filter === id
            ? [
                stylesWeb.itemWrapper,
                { borderBottomWidth: 2, borderColor: "#ff" },
              ]
            : stylesWeb.itemWrapper
          : filter === id
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

const FilterBar = (props) => {
  //Web version
  if (Platform.OS === "web") {
    return (
      <View style={stylesWeb.barContainer}>
        {DATA.map((it) => (
          <Item
            key={it.title}
            onPress={props.onPress}
            icon={it.icon}
            category={it.title}
          />
        ))}
      </View>
    );
  }
  //Mobile version
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
