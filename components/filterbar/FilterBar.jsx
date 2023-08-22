import {
  Image,
  Platform,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { styles, stylesWeb } from "./filterbar.style";

import { icons } from "../../constants";

const DATA = [
  {
    id: "MSMS1",
    title: "Museums",
    icon: icons.museum,
  },
  {
    id: "AC1",
    title: "Art & Culture",
    icon: icons.share,
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
    icon: icons.montain,
  },
  {
    id: "HSTR",
    title: "History",
    icon: icons.history,
  },
];

const check = (cat) => {};

const Item = (props) => (
  <TouchableOpacity
    style={Platform.OS == "web" ? stylesWeb.itemWrapper : styles.itemWrapper}
    onPress={() => {
      props.onPress((val) =>
        val.find((e) => e === props.category) === undefined
          ? [...val, props.category]
          : val.filter((e) => e !== props.category)
      );
    }}
  >
    <Image source={props.icon} style={styles.icon} />
  </TouchableOpacity>
);

const FilterBar = (props) => {
  return (
    <SafeAreaView
      style={
        Platform.OS == "web" ? stylesWeb.barContainer : styles.barContainer
      }
    >
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={({ item }) => {
          return (
            <Item
              onPress={props.onPress}
              icon={item.icon}
              category={item.title}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </SafeAreaView>
  );
};

export default FilterBar;
