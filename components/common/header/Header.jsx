import { useState } from "react";
import { View, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import SearchBar from "../searchBar/SearchBar";
import { useDispatch } from "react-redux";
import { setInfo } from "../../../redux/infoSlice";

import { SIZES } from "../../../constants/index";

const Header = () => {
  const router = useRouter();
  const [infos, setInfos] = useState("");
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <View
        style={{
          padding: SIZES.small,
        }}
      >
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
    </SafeAreaView>
  );
};

export default Header;
