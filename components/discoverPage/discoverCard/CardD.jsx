import { TouchableOpacity, View, Text, Image, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./cardd.style";
import { icons } from "../../../constants";
import { useDispatch } from "react-redux";
import { setInfo } from "../../../redux/infoSlice";

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
            <Text style={styles.ratingText}>{props.rating}/5</Text>
            <Image source={icons.star} style={styles.icon} />
          </View>
        </View>
        <Text numberOfLines={3} ellipsizeMode="tail" style={styles.desc}>
          {props.desc}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const CardD = (props) => {
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
      <FlatList
        data={props.places}
        renderItem={renderItem}
        horizontal={true}
        snapToInterval={400}
        decelerationRate="fast"
        keyExtractor={(item) => item.place}
      />
    </View>
  );
};

export default CardD;
