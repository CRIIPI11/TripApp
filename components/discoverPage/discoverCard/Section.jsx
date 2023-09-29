import {
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./section.style";
import { icons } from "../../../constants";
import { useDispatch } from "react-redux";
import { setInfo } from "../../../redux/infoSlice";

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
          <Text style={styles.placeTitle}>{props.name}</Text>
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
  const renderItem = ({ item }) => (
    <SubCard
      id={item.place}
      name={item.place}
      desc={item.desc}
      img={item.img}
      rating={item.rating}
      popular={item.popular}
    />
  );

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
        ) : (
          <FlatList
            data={props.places}
            renderItem={renderItem}
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
