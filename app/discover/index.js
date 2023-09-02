import { View, SafeAreaView, ScrollView, Text } from "react-native";
import { Stack } from "expo-router";
import { COLORS } from "../../constants";
import { DiscoverSection, FilterBar } from "../../components/discoverPage";
import Header from "../../components/common/header/Header";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />
      <FilterBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <DiscoverSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
