import { TouchableOpacity, View, Text, Image, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { styles } from "./cardd.style";

import { icons, images } from "../../../constants";

const SubCard = (props) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        router.push(`discover/search/${props.name}`);
      }}
    >
      <View style={styles.subCarContainer}>
        <Image source={{ uri: props?.img }} style={styles.image}></Image>
        <View style={styles.NRContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.placeTitle}>{props.name}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>{props.rating}/5</Text>
            <Image source={icons.star} style={styles.icon} />
          </View>
        </View>
        <Text style={styles.desc}>{props.desc}</Text>
      </View>
    </TouchableOpacity>
  );
};

const CardD = (props) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.titletext}>{props.title}</Text>
      <ScrollView
        horizontal={true}
        snapToInterval={400}
        decelerationRate="fast"
      >
        {props.places.map((item) => (
          <SubCard
            key={item.place}
            name={item.place}
            desc={item.desc}
            img={item.img}
            rating={item.rating}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CardD;
