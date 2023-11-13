import { Text, Image, View } from "react-native";
import styles from "./optionCard.style";
import Tags from "../../infoPage/tags/tags";

const OptionCard = ({ name, img, types }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: img }} style={styles.img} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        {/* <Text style={styles.types}>{types}</Text> */}
        <Tags tags={types} />
      </View>
    </View>
  );
};

export default OptionCard;
