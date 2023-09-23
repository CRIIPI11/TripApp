import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/index";
import Map from "../../components/map/Map";
import SearchBar from "../../components/common/searchBar/SearchBar";
import { FilterBar } from "../../components/discoverPage";

const map = () => {
  const [infos, setInfos] = useState("");

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.lightWhite }}>
      <View
        style={{
          padding: 12,
        }}
      >
        <SearchBar onchange={setInfos} search={infos} onclick={() => {}} />
      </View>
      <FilterBar />
      <Map />
    </SafeAreaView>
  );
};

export default map;
