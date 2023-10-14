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
import { COLORS, icons } from "../../../constants";
import { useDispatch } from "react-redux";
import { setInfo } from "../../../redux/infoSlice";
import { usePlaces } from "../../../hooks";
import { useEffect } from "react";

const { width } = Dimensions.get("screen");

export const SubCard = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        dispatch(
          setInfo({
            name: props.name,
            img: props.img,
            desc: props.desc,
            popular: props.popular,
          })
        );
        router.push(`discover/(info)/${props.name}`);
      }}
    >
      <View style={styles.subCarContainer}>
        <Image source={{ uri: props?.img }} style={styles.image}></Image>
        <View style={styles.NRContainer}>
          <View style={styles.titleContainer}>
            <Text numberOfLines={1} style={styles.placeTitle}>
              {props.name}
            </Text>
          </View>
          <View style={styles.ratingContainer}>
            <Image source={icons.star} style={styles.icon} />
            <Text style={styles.ratingText}>{props.rating}</Text>
          </View>
        </View>
        <Text numberOfLines={3} ellipsizeMode="tail" style={styles.desc}>
          {props.desc}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Section = (props) => {
  const { places, loading, getPLaces } = usePlaces();

  useEffect(() => {
    getPLaces(props.id);
  }, []);

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
                  id={item.item.place}
                  name={item.item.place}
                  desc={item.item.desc}
                  img={item.item.img.url}
                  rating={item.item.rating}
                  popular={item.item.popular}
                />
              );
            }}
            horizontal={true}
            snapToInterval={width * 0.96}
            decelerationRate="fast"
            keyExtractor={(item) => item.place}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default Section;
