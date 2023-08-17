import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";

import { COLORS, icons, SIZES } from "../../../constants";
import ScreenHeaderBtn from "../../../components/common/header/ScreenHeaderBtn";

const SearchResult = () => {
  const params = useSearchParams();
  const router = useRouter();
  console.log(params);

  return (
    <SafeAreaView style={{}}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.chevronLeft}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.xLarge }}>
          <Text>{params.id}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchResult;
