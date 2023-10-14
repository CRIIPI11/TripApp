import { Text, View } from "react-native";

import { styles } from "./discoversection.style";

import Section from "../discoverCard/Section";
import { useLocationStore } from "../../../hooks";

const DATA = [
  {
    place: "Miami asdsada asdasdassadsasdasda",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer quis auctor elit sed. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Nunc non blandit massa enim nec dui nunc mattis. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Nibh tellus molestie nunc non blandit massa. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Imperdiet nulla malesuada pellentesque elit eget. Malesuada pellentesque elit eget gravida cum sociis natoque. Ac tincidunt vitae semper quis lectus. Aliquam etiam erat velit scelerisque in.",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/36/Miami_-_florida.767.jpg",
    rating: "4",
    popular: ["Art & Culture", "Roadside", "Architecture", "Museums"],
  },
  {
    place: "Orlando",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer quis auctor elit sed. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Nunc non blandit massa enim nec dui nunc mattis. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Nibh tellus molestie nunc non blandit massa. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Imperdiet nulla malesuada pellentesque elit eget. Malesuada pellentesque elit eget gravida cum sociis natoque. Ac tincidunt vitae semper quis lectus. Aliquam etiam erat velit scelerisque in.",
    img: "https://cdn.britannica.com/07/201607-050-0B5774CB/Orlando-Florida-aerial-cityscape-towards-Eola-Lake.jpg",
    rating: "4",
  },
];

const DiscoverSection = () => {
  const { location } = useLocationStore();

  return (
    <View style={styles.container}>
      {/* <Section
        key={"location"}
        id={"location"}
        title={"Regional Favorites"}
        places={DATA}
        permission={location.permission}
      /> */}
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
