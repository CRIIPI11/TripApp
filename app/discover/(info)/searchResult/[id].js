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
import { usePlaces } from "../../../../hooks";
import { useLocationStore } from "../../../../hooks/useLocationStore";
import { useEffect, useState } from "react";
const { width, height } = Dimensions.get("screen");

const SearchResult = () => {
  const params = useSearchParams();
  const router = useRouter();
  const userLocation= useLocationStore();//HAS THE USER LOCATION
  const [timerFinished, setTimerFinished] = useState(false);
  const { places, loading, getPlaces } = usePlaces();
  var noResult = false;
  console.log("user coordinates: ", userLocation.location.location)
  useEffect(() => {
    getPlaces('search', params.id);
    const timer = setTimeout(() => {
      setTimerFinished(true);
    }, 3000);
  
    return () => {

      //make a function outside of SearchResult to get recommended places based on user location and place it here to fill out 
      clearTimeout(timer)
    };
  }, []);

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
        {places.length > 0 && !noResult? (
          <View>
              <ScrollView>
              <View style={styles.topContainer}>
                <Results places={places} />
              </View>
              </ScrollView>
            <View style={styles.bottomContainer}>
              <Recomended places={places[0].location} name = {places[0].place}/>
            </View>
          </View>
          
          
        ) : (
          <>
            <View style={styles.topContainer}>
              <Text style={{textAlign: "center", fontSize: 20, fontFamily: FONT.family}}>
                No results found
              </Text>
            </View>
            <View style={styles.bottomContainer}>
              <Recomended places={userLocation.location.location} name={"null"}/>
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
    width: '100%',
    height: height * 0.6,
    flexDirection: 'column',
},
bottomContainer: {
    width: '100%',
    height: height * 0.4,
    flexDirection: 'row',
    alignItems: 'center',
},
});

export default SearchResult;
