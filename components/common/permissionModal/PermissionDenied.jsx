import { View, TouchableOpacity, Image, Text } from "react-native";
import { icons } from "../../../constants";
import styles from "./permissiondenied.style";

const PermissionDenied = ({ onPress }) => {
  return (
    <View style={styles.alertContainer}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.closeButtom}
          onPress={() => onPress(false)}
        >
          <Image source={icons.close} style={styles.closeIcon}></Image>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Location</Text>
      </View>
      <View style={styles.body}>
        <Image source={icons.navigation} style={styles.navIcon}></Image>
        <Text style={styles.msgText}>
          To center the map on your current location, update your settings to
          “always” or “while using”
        </Text>
      </View>
    </View>
  );
};

export default PermissionDenied;
