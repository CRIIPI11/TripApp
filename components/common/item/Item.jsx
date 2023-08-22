import { TouchableOpacity, View } from "react-native";

import styles from "./item.styles";

import { icons } from "../../../constants";

const Item = (props) => (
  <View style={styles.item}>
    <Image source={icons.chevronLeft} style={styles.icon} />
  </View>
);

export default Item;
