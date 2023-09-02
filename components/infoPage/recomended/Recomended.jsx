import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import styles from "./recomended.style";

const Recomended = (props) => {
  return (
    <View style={styles.recomContainer}>
      <Text style={styles.titleText}>Recomended Places</Text>
      <View style={styles.cardsConatiner}>
        <FlatList
          data={props.places}
          horizontal={true}
          renderItem={(item) => {
            return (
              <TouchableOpacity
                key={item.item.place}
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
                  <Image
                    source={{ uri: item.item.img }}
                    style={styles.image}
                  ></Image>
                  <View style={{}}>
                    <Text style={styles.nameText}>{item.item.place}</Text>
                  </View>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.descText}
                  >
                    {item.item.desc}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Recomended;
