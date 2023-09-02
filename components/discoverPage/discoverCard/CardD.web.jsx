import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { stylesWeb } from "./cardd.style";
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
      <View style={stylesWeb.subCarContainer}>
        <Image source={{ uri: props?.img }} style={stylesWeb.image}></Image>
        <View style={stylesWeb.NRContainer}>
          <Text style={stylesWeb.placeTitle}>{props.name}</Text>
          <View style={stylesWeb.ratingContainer}>
            <Text style={stylesWeb.ratingText}>{props.rating}/5</Text>
            <Image source={icons.star} style={stylesWeb.icon} />
          </View>
        </View>
        <Text numberOfLines={3} style={stylesWeb.desc}>
          {props.desc}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const CardD = (props) => {
  return (
    <View style={stylesWeb.cardContainer}>
      <Text style={stylesWeb.titletext}>{props.title}</Text>
      <View style={stylesWeb.subCardsCont}>
        {props.places?.map((item) => (
          <SubCard
            key={item.place}
            name={item.place}
            desc={item.desc}
            img={item.img}
            rating={item.rating}
            popular={item.popular}
          />
        ))}
      </View>
    </View>
  );
};

export default CardD;
