import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES, SHADOWS } from "../../constants";
import { SearchBar } from "../../components";
import { FilterBar, DiscoverSection } from "../../components/discoverPage";

const Home = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View>
        <View
          style={{
            padding: SIZES.small,
          }}
        >
          <SearchBar
            onchange={setSearch}
            search={search}
            onclick={() => {
              if (search) {
                router.push(`discover/(search)/${search}`);
              }
            }}
          />
        </View>
        <FilterBar onPress={setFilter} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <DiscoverSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
