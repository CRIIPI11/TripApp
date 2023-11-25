import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import List from "../../components/routeList/list/List";
import { COLORS, FONT, icons } from "../../constants";
import { ListButtons } from "../../components/routeList/listButtons/ListButtons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ViewButtons } from "../../components/routeList/viewButtons/ViewButtons";

const DATA = [
  {
    place: "The Metropolitan Museum of Art",
    rating: 4.8,
    ratingAmount: 78376,
    desc: "no description available",
    vicinity: "1000 5th Ave, New York",
    types: ["Museums", "History"],
    location: {
      lat: 40.7794366,
      lng: -73.963244,
    },
    img: {
      width: 8659,
      height: 5792,
      url: "https://i.ytimg.com/vi/Rjs5OWl2RiQ/sddefault.jpg",
    },
  },
  {
    place: "American Museum of Natural History",
    rating: 4.5,
    ratingAmount: 18693,
    desc: "no description available",
    vicinity: "200 Central Park West, New York",
    types: ["Museums", "History"],
    location: {
      lat: 40.7813241,
      lng: -73.9739882,
    },
    img: {
      width: 4032,
      height: 3024,
      url: "https://i.ytimg.com/vi/Rjs5OWl2RiQ/sddefault.jpg",
    },
  },
  {
    place: "Brooklyn Museum",
    rating: 4.7,
    ratingAmount: 9262,
    desc: "no description available",
    vicinity: "200 Eastern Pkwy, Brooklyn",
    types: ["Museums", "History"],
    location: {
      lat: 40.6712062,
      lng: -73.9636306,
    },
    img: {
      width: 1080,
      height: 762,
      url: "https://i.ytimg.com/vi/Rjs5OWl2RiQ/sddefault.jpg",
    },
  },
  {
    place: "MUSEUM OF ICE CREAM",
    rating: 4.1,
    ratingAmount: 5257,
    desc: "no description available",
    vicinity: "558 Broadway, New York",
    types: ["Museums", "History"],
    location: {
      lat: 40.7238545,
      lng: -73.99791669999999,
    },
    img: {
      width: 4608,
      height: 2592,
      url: "https://i.ytimg.com/vi/Rjs5OWl2RiQ/sddefault.jpg",
    },
  },
  {
    place: "Tenement Museum",
    rating: 4.5,
    ratingAmount: 4380,
    desc: "no description available",
    vicinity: "103 Orchard St, New York",
    types: ["Museums", "History"],
    location: {
      lat: 40.718818,
      lng: -73.9900876,
    },
    img: {
      width: 3024,
      height: 4032,
      url: "https://i.ytimg.com/vi/Rjs5OWl2RiQ/sddefault.jpg",
    },
  },
  {
    place: "Queens Museum",
    rating: 4.5,
    ratingAmount: 2964,
    desc: "no description available",
    vicinity: "Flushing Meadows Corona Park, Building, Queens",
    types: ["Museums", "History"],
    location: {
      lat: 40.745914,
      lng: -73.8467247,
    },
    img: {
      width: 2100,
      height: 1488,
      url: "https://i.ytimg.com/vi/Rjs5OWl2RiQ/sddefault.jpg",
    },
  },
  {
    place: "The Newark Museum of Art",
    rating: 4.6,
    ratingAmount: 1652,
    desc: "no description available",
    vicinity: "49 Washington St, Newark",
    types: ["Museums", "History"],
    location: {
      lat: 40.7429427,
      lng: -74.1714034,
    },
    img: {
      width: 680,
      height: 510,
      url: "https://i.ytimg.com/vi/Rjs5OWl2RiQ/sddefault.jpg",
    },
  },
  {
    place: "Thomas Edison National Historical Park",
    rating: 4.7,
    ratingAmount: 1339,
    desc: "no description available",
    vicinity: "211 Main St, West Orange",
    types: ["Museums", "History"],
    location: {
      lat: 40.7838774,
      lng: -74.23413649999999,
    },
    img: {
      width: 4608,
      height: 3456,
      url: "https://i.ytimg.com/vi/Rjs5OWl2RiQ/sddefault.jpg",
    },
  },
  {
    place: "Morris Museum",
    rating: 4.6,
    ratingAmount: 678,
    desc: "no description available",
    vicinity: "6 Normandy Heights Rd, Morristown",
    types: ["Museums", "History"],
    location: {
      lat: 40.7960325,
      lng: -74.4482673,
    },
    img: {
      width: 8256,
      height: 5504,
      url: "https://i.ytimg.com/vi/Rjs5OWl2RiQ/sddefault.jpg",
    },
  },
  {
    place: "Thomas Edison Center at Menlo Park",
    rating: 4.5,
    ratingAmount: 619,
    desc: "no description available",
    vicinity: "37 Christie St, Edison",
    types: ["Museums", "History"],
    location: {
      lat: 40.5635485,
      lng: -74.3392874,
    },
    img: {
      width: 992,
      height: 595,
      url: "https://i.ytimg.com/vi/Rjs5OWl2RiQ/sddefault.jpg",
    },
  },
  {
    place: "Penn's Cave & Wildlife Park",
    rating: 4.7,
    ratingAmount: 3959,
    desc: "no description available",
    vicinity: "222 Penns Cave Rd, Centre Hall",
    types: ["History"],
    location: {
      lat: 40.8825498,
      lng: -77.61165679999999,
    },
    img: {
      width: 2448,
      height: 2448,
      url: "https://i.ytimg.com/vi/Rjs5OWl2RiQ/sddefault.jpg",
    },
  },
  {
    place: "Pennsylvania Military Museum",
    rating: 4.6,
    ratingAmount: 560,
    desc: "no description available",
    vicinity: "51 Boal Ave, Boalsburg",
    types: ["Museums", "History"],
    location: {
      lat: 40.7817241,
      lng: -77.7953582,
    },
    img: {
      width: 1565,
      height: 955,
      url: "https://i.ytimg.com/vi/Rjs5OWl2RiQ/sddefault.jpg",
    },
  },
  {
    place:
      "OH WOW! The Roger & Gloria Jones Children's Center for Science & Technology",
    rating: 4.6,
    ratingAmount: 592,
    desc: "no description available",
    vicinity: "15 Central Square, Youngstown",
    types: ["Museums", "History"],
    location: {
      lat: 41.0996508,
      lng: -80.64992529999999,
    },
    img: {
      width: 5312,
      height: 2988,
      url: "https://i.ytimg.com/vi/Rjs5OWl2RiQ/sddefault.jpg",
    },
  },
];

const getStoredPlacesData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("places");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Error retrieving data", e);
  }
};

const RouteList = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [places, setPlaces] = useState(undefined);
  console.log(params);

  useEffect(() => {
    getStoredPlacesData().then((data) => {
      setPlaces(data[0]?.places[0]?.guevoPlaces);
    });
  }, []);

  console.log(places);

  return (
    <SafeAreaView>
      {places && (
        <>
          {params.view ? (
            <>
              <Stack.Screen
                options={{
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => {
                        router.replace("tabs/forum");
                      }}
                      style={styles.buttonContainer}
                    >
                      <Image source={icons.chevronLeft} style={styles.icon} />
                    </TouchableOpacity>
                  ),
                  headerTitle: "Route",
                  headerShown: true,
                }}
              />
              <List places={places} view={params.view} />
              <ViewButtons />
            </>
          ) : (
            <>
              <Text style={styles.title}>Route</Text>
              <List places={places} view={params.view} />
              <ListButtons />
            </>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default RouteList;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "left",
    marginTop: 20,
    marginStart: 15,
    marginBottom: 10,
    color: COLORS.accents1,
    fontFamily: FONT.homenaje,
  },
  icon: { width: 25, height: 25, marginEnd: 15 },
  buttonContainer: {},
});
