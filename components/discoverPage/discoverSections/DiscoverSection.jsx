import {
  TouchableOpacity,
  View,
  SafeAreaView,
  SectionList,
  Text,
} from "react-native";

import { styles } from "./discoversection.style";

import { icons } from "../../../constants";
import CardD from "../discoverCard/CardD";

const DATA = [
  {
    title: "Popular Near Places",
    data: [
      {
        place: "Miami",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer quis auctor elit sed. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Nunc non blandit massa enim nec dui nunc mattis. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Nibh tellus molestie nunc non blandit massa. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Imperdiet nulla malesuada pellentesque elit eget. Malesuada pellentesque elit eget gravida cum sociis natoque. Ac tincidunt vitae semper quis lectus. Aliquam etiam erat velit scelerisque in.",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/36/Miami_-_florida.767.jpg",
        rating: "4",
      },
      {
        place: "Orlando",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer quis auctor elit sed. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Nunc non blandit massa enim nec dui nunc mattis. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Nibh tellus molestie nunc non blandit massa. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Imperdiet nulla malesuada pellentesque elit eget. Malesuada pellentesque elit eget gravida cum sociis natoque. Ac tincidunt vitae semper quis lectus. Aliquam etiam erat velit scelerisque in.",
        img: "https://cdn.britannica.com/07/201607-050-0B5774CB/Orlando-Florida-aerial-cityscape-towards-Eola-Lake.jpg",
        rating: "4",
      },
    ],
  },
  {
    title: "Popular Cities",
    data: [
      {
        place: "New York",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer quis auctor elit sed. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Nunc non blandit massa enim nec dui nunc mattis. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Nibh tellus molestie nunc non blandit massa. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Imperdiet nulla malesuada pellentesque elit eget. Malesuada pellentesque elit eget gravida cum sociis natoque. Ac tincidunt vitae semper quis lectus. Aliquam etiam erat velit scelerisque in.",
        img: "https://www.investopedia.com/thmb/uSjO_BX5Jl550BBLNla1QGFmZ5c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/LowerManhattanSkyline-900c48d4f1064a97893dbc1548d775e1.jpg",
        rating: "4",
      },
      {
        place: "New Jersey",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer quis auctor elit sed. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Nunc non blandit massa enim nec dui nunc mattis. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Nibh tellus molestie nunc non blandit massa. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Imperdiet nulla malesuada pellentesque elit eget. Malesuada pellentesque elit eget gravida cum sociis natoque. Ac tincidunt vitae semper quis lectus. Aliquam etiam erat velit scelerisque in.",
        img: "https://travellemming.com/wp-content/uploads/Things-to-Do-in-New-Jersey.jpg",
        rating: "4",
      },
    ],
  },
  {
    title: "Based on Previous Places",
    data: [
      {
        place: "Washignton",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer quis auctor elit sed. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Nunc non blandit massa enim nec dui nunc mattis. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Nibh tellus molestie nunc non blandit massa. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Imperdiet nulla malesuada pellentesque elit eget. Malesuada pellentesque elit eget gravida cum sociis natoque. Ac tincidunt vitae semper quis lectus. Aliquam etiam erat velit scelerisque in.",
        img: "https://a-z-animals.com/media/2022/06/shutterstock_110970671.jpg",
        rating: "4",
      },
      {
        place: "Maryland",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer quis auctor elit sed. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Nunc non blandit massa enim nec dui nunc mattis. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Nibh tellus molestie nunc non blandit massa. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Imperdiet nulla malesuada pellentesque elit eget. Malesuada pellentesque elit eget gravida cum sociis natoque. Ac tincidunt vitae semper quis lectus. Aliquam etiam erat velit scelerisque in.",
        img: "https://a.cdn-hotels.com/gdcs/production31/d1059/37f5e670-8f57-4ee8-8d26-036472c878b4.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        rating: "4",
      },
    ],
  },
];

const DiscoverSection = () => {
  return (
    <View style={styles.container}>
      {DATA.map((item) => (
        <CardD key={item.title} title={item.title} places={item.data} />
      ))}
    </View>
  );
};

export default DiscoverSection;
