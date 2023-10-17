import { View, ScrollView, Text } from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { COLORS } from "../../constants";
import { DiscoverSection, FilterBar } from "../../components/discoverPage";
import SearchBar from "../../components/common/searchBar/SearchBar";
import { useRouter } from "expo-router";
import { setInfo } from "../../redux/infoSlice";
import { useDispatch } from "react-redux";
import { useLocationStore } from "../../hooks";

const Home = () => {
  const [infos, setInfos] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const { startLocation } = useLocationStore();

  useEffect(() => {
    startLocation();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.accents8 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ padding: 12 }}>
        <SearchBar
          onchange={setInfos}
          search={infos}
          onclick={() => {
            if (infos) {
              dispatch(setInfo({ name: infos }));
              router.push(`discover/(info)/${infos}`);
            }
          }}
        />
      </View>
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
