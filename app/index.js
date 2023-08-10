import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";

import { ScreenHeaderBtn } from "../components";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Text>Hola</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
