import { Text,Image, View, ScrollView, Dimensions, Platform, StyleSheet, ActivityIndicator } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { COLORS, FONT, icons, SIZES } from "../../../../constants";
import ScreenHeaderBtn from "../../../../components/common/stackheader/ScreenHeaderBtn";
import { useSelector } from "react-redux";
import Recomended from "../../../../components/infoPage/recomended/Recomended";
import Results from "../../../../components/infoPage/results/Results";
import SearchBar from "../../../../components/common/searchBar/SearchBar";
import { usePlaces } from "../../../../hooks";
import { useEffect, useState } from "react";
const { width, height } = Dimensions.get("screen");

const DATA = [{
  "place": "Mount Rushmore National Memorial",
  "rating": 4.7,
  "desc": "Massive mountainside sculpture drawing crowds for its depiction of 4 former American presidents.",
  "vicinity": "13000 South Dakota 244, Keystone",
  "types": [
      "tourist_attraction",
      "park",
      "point_of_interest",
      "establishment"
  ],
  "location": {
      "lat": 43.88033569999999,
      "lng": -103.4537746
  },
  "img": {
      "width": 3024,
      "height": 3024,
      "url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=ATJ83zjWGqpK7b2K4CQ9Fee0lmilAsSR_tSjEN2JsIhxXtnQhwDoW-cZwJPLL1aiVMNtKRJX9OxQxs6sKMt9ltgJ1mrgvXPFi399Ih7vhcgIqd_w4acb-BGL3o3R5jIw5NyVo50FOdXtgq7vnEAYf4Nb8pk1Utt9Tldhg8g0KAn9zMBuRSC4&key=AIzaSyC1AD8HBg4QiCZY-PecoMcOOS0M2oe-HQw"
  }
},{
  "place": "Mount Rushmore National Memorial",
  "rating": 4.7,
  "desc": "Massive mountainside sculpture drawing crowds for its depiction of 4 former American presidents.",
  "vicinity": "13000 South Dakota 244, Keystone",
  "types": [
      "tourist_attraction",
      "park",
      "point_of_interest",
      "establishment"
  ],
  "location": {
      "lat": 43.88033569999999,
      "lng": -103.4537746
  },
  "img": {
      "width": 3024,
      "height": 3024,
      "url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=ATJ83zjWGqpK7b2K4CQ9Fee0lmilAsSR_tSjEN2JsIhxXtnQhwDoW-cZwJPLL1aiVMNtKRJX9OxQxs6sKMt9ltgJ1mrgvXPFi399Ih7vhcgIqd_w4acb-BGL3o3R5jIw5NyVo50FOdXtgq7vnEAYf4Nb8pk1Utt9Tldhg8g0KAn9zMBuRSC4&key=AIzaSyC1AD8HBg4QiCZY-PecoMcOOS0M2oe-HQw"
  }
},{
  "place": "Mount Rushmore National Memorial",
  "rating": 4.7,
  "desc": "Massive mountainside sculpture drawing crowds for its depiction of 4 former American presidents.",
  "vicinity": "13000 South Dakota 244, Keystone",
  "types": [
      "tourist_attraction",
      "park",
      "point_of_interest",
      "establishment"
  ],
  "location": {
      "lat": 43.88033569999999,
      "lng": -103.4537746
  },
  "img": {
      "width": 3024,
      "height": 3024,
      "url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=ATJ83zjWGqpK7b2K4CQ9Fee0lmilAsSR_tSjEN2JsIhxXtnQhwDoW-cZwJPLL1aiVMNtKRJX9OxQxs6sKMt9ltgJ1mrgvXPFi399Ih7vhcgIqd_w4acb-BGL3o3R5jIw5NyVo50FOdXtgq7vnEAYf4Nb8pk1Utt9Tldhg8g0KAn9zMBuRSC4&key=AIzaSyC1AD8HBg4QiCZY-PecoMcOOS0M2oe-HQw"
  }
},{
  "place": "Mount Rushmore National Memorial",
  "rating": 4.7,
  "desc": "Massive mountainside sculpture drawing crowds for its depiction of 4 former American presidents.",
  "vicinity": "13000 South Dakota 244, Keystone",
  "types": [
      "tourist_attraction",
      "park",
      "point_of_interest",
      "establishment"
  ],
  "location": {
      "lat": 43.88033569999999,
      "lng": -103.4537746
  },
  "img": {
      "width": 3024,
      "height": 3024,
      "url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=ATJ83zjWGqpK7b2K4CQ9Fee0lmilAsSR_tSjEN2JsIhxXtnQhwDoW-cZwJPLL1aiVMNtKRJX9OxQxs6sKMt9ltgJ1mrgvXPFi399Ih7vhcgIqd_w4acb-BGL3o3R5jIw5NyVo50FOdXtgq7vnEAYf4Nb8pk1Utt9Tldhg8g0KAn9zMBuRSC4&key=AIzaSyC1AD8HBg4QiCZY-PecoMcOOS0M2oe-HQw"
  }
},{
  "place": "Mount Rushmore National Memorial",
  "rating": 4.7,
  "desc": "Massive mountainside sculpture drawing crowds for its depiction of 4 former American presidents.",
  "vicinity": "13000 South Dakota 244, Keystone",
  "types": [
      "tourist_attraction",
      "park",
      "point_of_interest",
      "establishment"
  ],
  "location": {
      "lat": 43.88033569999999,
      "lng": -103.4537746
  },
  "img": {
      "width": 3024,
      "height": 3024,
      "url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=ATJ83zjWGqpK7b2K4CQ9Fee0lmilAsSR_tSjEN2JsIhxXtnQhwDoW-cZwJPLL1aiVMNtKRJX9OxQxs6sKMt9ltgJ1mrgvXPFi399Ih7vhcgIqd_w4acb-BGL3o3R5jIw5NyVo50FOdXtgq7vnEAYf4Nb8pk1Utt9Tldhg8g0KAn9zMBuRSC4&key=AIzaSyC1AD8HBg4QiCZY-PecoMcOOS0M2oe-HQw"
  }
},{
  "place": "Mount Rushmore National Memorial",
  "rating": 4.7,
  "desc": "Massive mountainside sculpture drawing crowds for its depiction of 4 former American presidents.",
  "vicinity": "13000 South Dakota 244, Keystone",
  "types": [
      "tourist_attraction",
      "park",
      "point_of_interest",
      "establishment"
  ],
  "location": {
      "lat": 43.88033569999999,
      "lng": -103.4537746
  },
  "img": {
      "width": 3024,
      "height": 3024,
      "url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=ATJ83zjWGqpK7b2K4CQ9Fee0lmilAsSR_tSjEN2JsIhxXtnQhwDoW-cZwJPLL1aiVMNtKRJX9OxQxs6sKMt9ltgJ1mrgvXPFi399Ih7vhcgIqd_w4acb-BGL3o3R5jIw5NyVo50FOdXtgq7vnEAYf4Nb8pk1Utt9Tldhg8g0KAn9zMBuRSC4&key=AIzaSyC1AD8HBg4QiCZY-PecoMcOOS0M2oe-HQw"
  }
},];

const SearchResult = () => {
  const params = useSearchParams();
  const router = useRouter();

  const { places, loading, getPlaces } = usePlaces();

  useEffect(() => {
    getPlaces('search', params.id);
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
      {loading? (<ActivityIndicator size="large" color="#00ff00" />) : (
      <View>
        <View style = {styles.topContainer}>
          {/*going to need to replace DATA with actual user input and results from API call */}
          <Results places={places} /> 
        </View>
        <View style = {styles.bottomContainer}> 
          <Recomended places={places[0]?.location} />
        </View>
      </View>
    )}
    </View>
  );
};


const styles = StyleSheet.create({
  topContainer: {
      width: '100%',
      height: '73%',
      flexDirection: 'column',
  },
  bottomContainer: {
      width: '100%',
      height: '25%',
      flexDirection: 'row',
      alignItems: 'center',
  },
});

export default SearchResult;
