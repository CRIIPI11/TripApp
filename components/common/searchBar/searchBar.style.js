import { Platform, StyleSheet } from "react-native";

import { COLORS, SIZES, FONT, SHADOWS } from "../../../constants";

const styles =
  Platform.OS === "web"
    ? StyleSheet.create({
        searchContainer: {
          justifyContent: "center",
          alignItems: "center",
          marginTop: SIZES.large,
          width: "100%",
        },
        searchWrapper: {
          backgroundColor: COLORS.white,
          marginRight: SIZES.small,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: SIZES.small,
          width: "40%",
          height: 50,
          ...SHADOWS.medium,
        },
        searchInput: {
          width: "100%",
          height: "100%",
          paddingHorizontal: SIZES.medium,
        },
      })
    : StyleSheet.create({
        searchContainer: {
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          padding: SIZES.xxSmall,
          marginTop: SIZES.small,
        },
        searchWrapper: {
          flex: 1,
          backgroundColor: COLORS.accents8,
          marginRight: SIZES.small,
          justifyContent: "center",
          borderRadius: SIZES.small,
          height: 50,
          borderBottomColor: COLORS.accents4,
          borderWidth: 0.3,
        },
        searchInput: {
          width: "100%",
          height: "100%",
          paddingHorizontal: 42,
        },
        icon: {
          width: 20,
          height: 20,
          position: "absolute",
          left: 16,
          tintColor: COLORS.accents6,
        },
      });

export default styles;
