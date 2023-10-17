import { Text, View } from "react-native";

import { styles } from "./discoversection.style";

import Section from "../discoverCard/Section";
import { useLocationStore } from "../../../hooks";

const DiscoverSection = () => {
  const { location } = useLocationStore();

  return (
    <View style={styles.container}>
      <Section
        key={"location"}
        id={"location"}
        title={"Regional Favorites"}
        permission={location.permission}
      />
      <Section key={"popular"} id={"popular"} title={"Top Destinations"} />
      {/* <Section
        key={"Based on Previous Places"}
        title={"Based on Previous Places"}
        places={DATA3}
      /> */}
    </View>
  );
};

export default DiscoverSection;
