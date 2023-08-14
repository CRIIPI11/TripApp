import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import { Stack, useRouter, Tabs } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";

import { ScreenHeaderBtn } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={{}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Text>Hola</Text>
          <TextInput
            style={{ width: "100%", height: "100%" }}
            placeholder="Search"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
