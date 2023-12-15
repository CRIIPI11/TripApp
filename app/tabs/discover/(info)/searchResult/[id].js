import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { COLORS, FONT, icons } from "../../../../../constants";
import ScreenHeaderBtn from "../../../../../components/common/stackheader/ScreenHeaderBtn";
import Recomended from "../../../../../components/infoPage/recomended/Recomended";
import Results from "../../../../../components/infoPage/results/Results";
import { usePlaces } from "../../../../../hooks";
import { useLocationStore } from "../../../../../hooks/useLocationStore";
import { useEffect, useState } from "react";
const { width, height } = Dimensions.get("screen");

const SearchResult = () => {
  const params = useSearchParams();
  const router = useRouter();
  const userLocation = useLocationStore(); //HAS THE USER LOCATION
  const [timerFinished, setTimerFinished] = useState(false);
  const { places, loading, getPlaces } = usePlaces();
  var noResult = false;

  useEffect(() => {
    getPlaces("search", params.id);
    const timer = setTimeout(() => {
      setTimerFinished(true);
    }, 3000);

    return () => {
      //make a function outside of SearchResult to get recommended places based on user location and place it here to fill out
      clearTimeout(timer);
    };
  }, []);

  return (
    <View
      style={{
        alignSelf: "center",
        width: width,
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
      {loading && !timerFinished ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <View>
          {places.length > 0 && !noResult ? (
            <>
              <View style={styles.topContainer}>
                <Results places={places} />
              </View>
              <View style={styles.bottomContainer}>
                <Recomended
                  placeLocation={places[0].location}
                  name={places[0].place}
                />
              </View>
            </>
          ) : (
            <>
              <View style={styles.topContainer}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontFamily: FONT.family,
                    padding: 80,
                  }}
                >
                  No results found
                </Text>
              </View>
              <View style={styles.bottomContainer}>
                <Recomended
                  placeLocation={userLocation.location.location}
                  name={"null"}
                />
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
    flexDirection: "column",
  },
  bottomContainer: {
    width: "100%",
    height: height * 0.4,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SearchResult;
