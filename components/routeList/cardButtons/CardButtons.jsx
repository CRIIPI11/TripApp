import { View, TouchableOpacity, Text } from "react-native";
import styles from "./cardButtons.style";

const CardButtons = ({ delet, name }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          delet(name);
        }}
        style={styles.buttonContainer}
      >
        <Text style={styles.text}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardButtons;
