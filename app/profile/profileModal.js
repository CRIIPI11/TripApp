import { Stack } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const profileModal = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ presentation: "modal" }} />
      <Text>profileModal</Text>
    </SafeAreaView>
  );
};

export default profileModal;
