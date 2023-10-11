import { Text, View } from "react-native";

import { styles } from "./discoversection.style";

import Section from "../discoverCard/Section";
import { useLocationStore } from "../../../hooks";

const DATA = [
  {
    data: [
      {
        place: "Miami",
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
    ],
  },
];
const DATA2 = [
  {
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
];
const DATA3 = [
  {
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
  const { location } = useLocationStore();

  return (
    <View style={styles.container}>
      {DATA.map((item) => (
        <Section
          key={"Popular Near Places"}
          title={"Popular Near Places"}
          places={item.data}
          permission={location.permission}
        />
      ))}
      {DATA2.map((item) => (
        <Section
          key={"Popular Cities"}
          title={"Popular Cities"}
          places={item.data}
        />
      ))}
      {DATA3.map((item) => (
        <Section
          key={"Based on Previous Places"}
          title={"Based on Previous Places"}
          places={item.data}
        />
      ))}
    </View>
  );
};

export default DiscoverSection;
