import { Text, Image, View } from "react-native";
import styles from "./optionCard.style";
import Tags from "../../infoPage/tags/tags";
import CardButtons from "../cardButtons/CardButtons";

const OptionCard = ({ name, img, types, vicinity, delet }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: img }} style={styles.img} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Tags tags={types} />
        <Text style={styles.vicinity}>{vicinity}</Text>
        <CardButtons delet={delet} name={name} />
      </View>
    </View>
  );
};

export default OptionCard;
