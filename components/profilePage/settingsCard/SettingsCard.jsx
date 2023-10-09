import { Text, View, TouchableOpacity, Image } from "react-native";
import { icons } from "../../../constants";

import styles from "./settings.style";
import { Link, useRouter } from "expo-router";

const SettingsCard = () => {
  const router = useRouter();
  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => router.push("profile/preferences")}
        >
          <Text style={styles.optionText}>Preferences</Text>
          <Image style={styles.icon} source={icons.settings} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => router.push("profile/profilesettings")}
        >
          <Text style={styles.optionText}>Profile</Text>
          <Image style={styles.icon} source={icons.usercircle} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => router.push("profile/saved")}
        >
          <Text style={styles.optionText}>Saved</Text>
          <Image style={styles.icon} source={icons.bookmark} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsCard;
