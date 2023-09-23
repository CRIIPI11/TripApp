import { Text, View, ScrollView, Dimensions, Platform } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { COLORS, FONT, icons, SIZES } from "../../../constants";
import ScreenHeaderBtn from "../../../components/common/stackheader/ScreenHeaderBtn";
import Cover from "../../../components/infoPage/cover/Cover";
import { useSelector } from "react-redux";
import Options from "../../../components/infoPage/options/Options";
import Recomended from "../../../components/infoPage/recomended/Recomended";
import SearchBar from "../../../components/common/searchBar/SearchBar";
const { width, height } = Dimensions.get("screen");

const DATA = [
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
];

const SearchResult = () => {
  // const params = useSearchParams();
  const router = useRouter();
  const info = useSelector((state) => state.info);

  return (
    <View
      style={{
        alignSelf: "center",
        width: Platform.OS === "web" ? width * 0.6 : width,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />
      {Platform.OS === "web" && <SearchBar />}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: SIZES.medium,
          }}
        >
          <Text style={{ fontFamily: FONT.homenaje, fontSize: SIZES.xxLarge }}>
            {info.info.name}
          </Text>
        </View>
        <Cover img={info.info.img} pop={info.info.popular} />
        <View style={{ marginStart: SIZES.xLarge, marginEnd: SIZES.xLarge }}>
          <Text
            style={{
              fontFamily: FONT.homenaje,
              fontSize: SIZES.medium,
              textAlign: "center",
            }}
          >
            {info.info.desc}
          </Text>
        </View>
        <Options />
        <View>
          <Recomended places={DATA} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchResult;
