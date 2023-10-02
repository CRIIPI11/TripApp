import { Text, View, TouchableOpacity, Image } from "react-native";
import { icons } from "../../../constants";

import styles from "./settings.style";
import { Link } from "expo-router";

const SettingsCard = () => {
  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Preferences</Text>
          <Image style={styles.icon} source={icons.settings} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Profile</Text>
          <Image style={styles.icon} source={icons.usercircle} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Saved</Text>
          <Image style={styles.icon} source={icons.bookmark} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsCard;
