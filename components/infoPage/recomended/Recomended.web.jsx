import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./recomended.style";

const Recomended = (props) => {
  console.log(props.places);

  return (
    <View style={styles.recomContainer}>
      <Text style={styles.titleText}>Recomended Places</Text>
      <View style={styles.cardsConatiner}>
        {props.places?.map((place) => (
          <TouchableOpacity
            key={place.place}
            activeOpacity={1}
            onPress={() => {
              // dispatch(
              //   setInfo({
              //     name: props.name,
              //     img: props.img,
              //     desc: props.desc,
              //     popular: props.popular,
              //   })
              // );
              // router.push(`discover/(info)/${props.name}`);
            }}
          >
            <View style={styles.cardContainer}>
              <Image source={{ uri: place.img }} style={styles.image}></Image>
              <View style={{}}>
                <Text style={styles.nameText}>{place.place}</Text>
              </View>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.descText}
              >
                {place.desc}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Recomended;
