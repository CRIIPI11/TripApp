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
import FilterBar from "../../components/filterbar/FilterBar";

const Home = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View
            style={{
              flex: 1,
              padding: SIZES.small,
            }}
          >
            <SearchBar
              onchange={setSearch}
              search={search}
              onclick={() => {
                if (search) {
                  router.push(`discover/search/${search}`);
                }
              }}
            />
          </View>
          <FilterBar onPress={setFilter} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
