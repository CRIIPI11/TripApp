import { Text, View, Image } from "react-native";
import { images } from "../../../constants/index";
import styles from "./cover.style";
import Tags from "../tags/tags";

const Cover = ({ img, types, vicinity }) => {
  return (
    <View style={styles.coverContainer}>
      {img !== "no image" ? (
        <Image source={{ uri: img }} style={styles.image}></Image>
      ) : (
        <Image source={images.noimage} style={styles.image}></Image>
      )}
      <View style={styles.subTitleContainer}>
        <Tags tags={types} />
        <Text style={styles.subTitleText}>{vicinity}</Text>
      </View>
    </View>
  );
};

export default Cover;
