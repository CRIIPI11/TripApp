import { View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { COLORS } from "../../../constants";
import { DiscoverSection, FilterBar } from "../../../components/discoverPage";
import SearchBar from "../../../components/common/searchBar/SearchBar";
import { useRouter } from "expo-router";
import { useLocationStore } from "../../../hooks";

const Home = () => {
  // //the variables below will be used to search for a place
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();
  const { startLocation } = useLocationStore();

  useEffect(() => {
    startLocation();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.accents8 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ padding: 12 }}>
        <SearchBar
          onchange={setSearchInput}
          search={searchInput}
          onclick={() => {
            if (searchInput) {
              router.push(`tabs/discover/(info)/searchResult/${searchInput}`);
            }
          }}
        />
      </View>
      <FilterBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <DiscoverSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
