import { View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator } from "react-native";
import { usePlaces } from "../../../hooks";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setInfo } from "../../../redux/infoSlice";
import { useRouter } from "expo-router";
import { images } from "../../../constants";
import styles from "./recomended.style";

const Recomended = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();




  const { places, loading, getPlaces } = usePlaces();

  useEffect(() => {
    getPlaces('recommended', props.places);
  }, []);

  //TODO: add logic that does not show the current location being looked at in the recomended places
  const recommendedPlaces = places.filter((place) => {
    return place.place !== props.name;
  });

  return (
    <View style={styles.recomContainer}>
      <Text style={styles.titleText}>Recomended Places</Text>
      {loading? (<ActivityIndicator size="large" color="#00ff00" />) : (
        <View style={styles.cardsConatiner}>
          <FlatList
            data={recommendedPlaces}
            horizontal={true}
            renderItem={(item) => {
              return (
                <TouchableOpacity
                  key={item.item.place}
                  activeOpacity={1}
                  onPress={() => {
                    dispatch(
                      setInfo({
                        place: item.item.place,
                        img: item.item.img ? item.item.img.url : "no image",
                        desc: item.item.desc,
                        rating: item.item.rating,
                        vicinity: item.item.vicinity,
                        types: item.item.types,
                        location: item.item.location,
                      })
                    );
                    router.push(`discover/(info)/${props.name}`);
                  }}
                >
                  <View style={styles.cardContainer}>
                    {item.item.img !== null ? (
                      <Image source={{ uri: item.item.img.url }} style={styles.image}></Image>
                    ) : (
                      <Image source={images.noimage} style={styles.image}></Image>
                    )}

                    <View style={{}}>
                      <Text style={styles.nameText}>{item.item.place}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
            indicatorStyle={"black"}
          />
        </View>
      )
      }
    </View>
  );
};

export default Recomended;
