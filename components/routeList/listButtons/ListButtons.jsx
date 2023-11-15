import { TouchableOpacity, Text, View } from "react-native";
import styles from "./listButtons.style";
import { useRouter } from "expo-router";

export const ListButtons = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          router.push("tabs/discover/(info)");
        }}
        style={styles.buttonContainer}
      >
        <Text style={styles.text}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.buttonContainer}>
        <Text style={styles.text}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.buttonContainer}>
        <Text style={styles.text}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};
