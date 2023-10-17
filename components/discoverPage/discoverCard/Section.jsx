import {
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./section.style";
import { COLORS, icons, images } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { setInfo } from "../../../redux/infoSlice";
import { usePlaces } from "../../../hooks";
import { useEffect } from "react";

const { width } = Dimensions.get("screen");

export const SubCard = ({
  name,
  desc,
  img,
  rating,
  types,
  location,
  vicinity,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        dispatch(
          setInfo({
            place: name,
            rating: rating,
            desc: desc,
            vicinity: vicinity,
            types: types,
            location: location,
            img: img,
          })
        );
        router.push(`discover/(info)/${name}`);
      }}
    >
      <View style={styles.subCarContainer}>
        {img !== "no image" ? (
          <Image source={{ uri: img }} style={styles.image}></Image>
        ) : (
          <Image source={images.noimage} style={styles.image}></Image>
        )}
        <View style={styles.NRContainer}>
          <View style={styles.titleContainer}>
            <Text numberOfLines={1} style={styles.placeTitle}>
              {name}
            </Text>
          </View>
          <View style={styles.ratingContainer}>
            <Image source={icons.star} style={styles.icon} />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>
        <Text numberOfLines={3} ellipsizeMode="tail" style={styles.desc}>
          {desc}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Section = (props) => {
  const { places, loading, getPLaces } = usePlaces();
  const filter = useSelector((state) => state.filter.filter);

  useEffect(() => {
    getPLaces(props.id);
  }, [props.id === "location" ? filter : null]);

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.titletext}>{props.title}</Text>
      <View style={styles.subCardsCont}>
        {props.permission && props.permission !== "granted" ? (
          <View style={styles.errorConatainer}>
            <Text style={styles.errortexttitle}>
              Please Allow Location Permission
            </Text>
            <Text style={styles.errortextmsg}>
              To show places near your location, update your settings to a
              "always" o or "while using"
            </Text>
          </View>
        ) : loading ? (
          <ActivityIndicator
            size="large"
            color={COLORS.accents5}
            style={{ padding: 50 }}
          />
        ) : (
          <FlatList
            data={places}
            renderItem={(item) => {
              return (
                <SubCard
                  key={item.item.place}
                  name={item.item.place}
                  desc={item.item.desc}
                  img={item.item.img ? item.item.img.url : "no image"}
                  rating={item.item.rating}
                  location={item.item.location}
                  types={item.item.types}
                  vicinity={item.item.vicinity}
                />
              );
            }}
            horizontal={true}
            snapToInterval={width * 0.95 + 1}
            decelerationRate={0.9}
            keyExtractor={(item) => item.place}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={5}
          />
        )}
      </View>
    </View>
  );
};

export default Section;
