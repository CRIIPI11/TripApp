import { Text, View, ScrollView, Dimensions, Platform, StyleSheet } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { COLORS, FONT, icons, SIZES } from "../../../constants";
import ScreenHeaderBtn from "../../../components/common/stackheader/ScreenHeaderBtn";
import Cover from "../../../components/infoPage/cover/Cover";
import { useSelector } from "react-redux";
import Options from "../../../components/infoPage/options/Options";
import Recomended from "../../../components/infoPage/recomended/Recomended";
import SearchBar from "../../../components/common/searchBar/SearchBar";
const { width, height } = Dimensions.get("screen");

const SearchResult = () => {
  // const params = useSearchParams();
  const router = useRouter();
  const info = useSelector((state) => state.info);

  return (
    <View
      style={{
        alignSelf: "center",
        width: Platform.OS === "web" ? width * 0.6 : width,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.accents8 },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />
      {Platform.OS === "web" && <SearchBar />}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: SIZES.medium,
          }}
        >
          <Text style={{ fontFamily: FONT.homenaje, fontSize: SIZES.xxLarge }}>
            {info.place}
          </Text>
        </View>
        <Cover img={info.img} pop={info.types} add = {info.vicinity} />
        <View style={{ marginStart: SIZES.xLarge, marginEnd: SIZES.xLarge }}>
          <Text
            style={{
              fontFamily: FONT.homenaje,
              fontSize: SIZES.medium,
              textAlign: "center",
            }}
          >
            {info.desc}
          </Text>
        </View>
        <Options />
        <View>
          <Recomended places={info.location} name = {info.place} style = {styles.bottomContainer}/>
        </View>
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  topContainer: {
      width: '100%',
      height: '75%',
      flexDirection: 'column',
  },
  bottomContainer: {
      flex: 1,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      marginTop: SIZES.xxLarge,
      paddingTop: SIZES.xxLarge,
  },
});


export default SearchResult;
