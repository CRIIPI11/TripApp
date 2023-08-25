import { Image } from "react-native";
import { Tabs } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { COLORS, icons } from "../constants";
import style from "../components/common/navBar/navBar.style";

export default function Layout() {
  // if (Platform.OS === "web") {
  //   return <Slot />;
  // }

  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    HomenajeRegular: require("../assets/fonts/Homenaje-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: COLORS.lightWhite, color: "#004950" },
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? icons.discoverFocused : icons.discover}
              resize="cover"
              style={style.tabIcon(size)}
            />
          ),
          // tabBarIconStyle: { color: "red" },
          tabBarActiveTintColor: "#8e0387",
          // tabBarInactiveTintColor: "green",
          // tabBarActiveBackgroundColor: "gray",
          // tabBarInactiveBackgroundColor: "#fb7061",
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? icons.mapFocused : icons.map}
              resize="cover"
              style={style.tabIcon(size)}
            />
          ),
          tabBarActiveTintColor: "#8e0387",
        }}
      />
      <Tabs.Screen
        name="forum"
        options={{
          title: "Forum",
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? icons.forumFocused : icons.forum}
              resize="cover"
              style={style.tabIcon(size)}
            />
          ),
          tabBarActiveTintColor: "#8e0387",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? icons.profileFocused : icons.profile}
              resize="cover"
              style={style.tabIcon(size)}
            />
          ),
          tabBarActiveTintColor: "#8e0387",
        }}
      />
    </Tabs>
  );
}
