import {
  Text,
  View,
  Dimensions,
  Platform,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { COLORS, FONT, icons, SIZES } from "../../../../constants";
import ScreenHeaderBtn from "../../../../components/common/stackheader/ScreenHeaderBtn";
import Recomended from "../../../../components/infoPage/recomended/Recomended";
import Results from "../../../../components/infoPage/results/Results";
import SearchBar from "../../../../components/common/searchBar/SearchBar";
import { useLocationStore, usePlaces } from "../../../../hooks";
import { useEffect, useState } from "react";
const { width, height } = Dimensions.get("screen");

const SearchResult = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [timerFinished, setTimerFinished] = useState(false);
  const { places, loading, getPlaces } = usePlaces();

  const { location } = useLocationStore();

  useEffect(() => {
    getPlaces("search", params.id);

    const timer = setTimeout(() => {
      setTimerFinished(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // console.log(places);

  return (
    <View
      style={{
        alignSelf: "center",
        width: Platform.OS === "web" ? width * 0.6 : width,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.accents8 },
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
      {loading && !timerFinished ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <View>
          {places.length > 0 ? (
            <View>
              <View style={styles.topContainer}>
                <Results places={places} />
              </View>
              <View style={styles.bottomContainer}>
                <Recomended places={places[0].location} />
              </View>
            </View>
          ) : (
            <>
              <View style={styles.topContainer}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontFamily: FONT.family,
                  }}
                >
                  No results found
                </Text>
              </View>
              <View style={styles.bottomContainer}>
                <Recomended places={location.location} />
              </View>
            </>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    height: "73%",
    flexDirection: "column",
  },
  bottomContainer: {
    width: "100%",
    height: "25%",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SearchResult;
