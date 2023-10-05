import { Stack } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const saved = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: true }} />
      <Text>saved</Text>
    </SafeAreaView>
  );
};

export default saved;
