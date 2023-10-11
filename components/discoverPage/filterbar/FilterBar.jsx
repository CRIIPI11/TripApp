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
    id: "MSMS1",
    title: "Museums",
    icon: icons.museum,
  },
  {
    id: "AC1",
    title: "Art & Culture",
    icon: icons.art,
  },
  {
    id: "ARCH",
    title: "Architecture",
    icon: icons.arch,
  },
  {
    id: "RDSA",
    title: "Roadside Attractions",
    icon: icons.sign,
  },
  {
    id: "FDDRK",
    title: "Food & Drink",
    icon: icons.fork,
  },
  {
    id: "NTRE",
    title: "Nature",
    icon: icons.nature,
  },
  {
    id: "HSTR",
    title: "History",
    icon: icons.history,
  },
];

const Item = (props) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);

  return (
    <TouchableOpacity
      style={
        Platform.OS == "web"
          ? filter === props.category
            ? [
                stylesWeb.itemWrapper,
                { borderBottomWidth: 2, borderColor: "#ff" },
              ]
            : stylesWeb.itemWrapper
          : filter === props.category
          ? [styles.itemWrapper, { borderBottomWidth: 2, borderColor: "#ff" }]
          : styles.itemWrapper
      }
      onPress={() => {
        dispatch(setFilter(props.category));
      }}
    >
      <Image source={props.icon} style={styles.icon} />
      <Text style={styles.itemName}>{props.category}</Text>
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
          <Item icon={item.icon} category={item.title} />
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        fadingEdgeLength={50}
      />
    </View>
  );
};

export default FilterBar;
