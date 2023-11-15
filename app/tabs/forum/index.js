import { Text, ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const Forum = () => {
  return (
    <SafeAreaView style={{}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>No Active Trip</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Forum;
