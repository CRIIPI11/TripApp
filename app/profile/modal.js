import { Stack } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const modal = () => {
  return (
    <SafeAreaView>
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      <Text>Modal</Text>
    </SafeAreaView>
  );
};

export default modal;
