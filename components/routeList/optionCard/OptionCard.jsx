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
        <View style={styles.typesContainer}>
          {types.map((tag, index) => (
            <View key={index} style={styles.tagItem}>
              <Text key={index} style={styles.textContainer}>
                {tag}
              </Text>
            </View>
          ))}
        </View>
        <Text style={styles.vicinity}>{vicinity}</Text>
        <CardButtons delet={delet} name={name} />
      </View>
    </View>
  );
};

export default OptionCard;
