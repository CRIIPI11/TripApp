import { Platform, Image } from "react-native";
import { Link, Slot, Stack, Tabs } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";

import style from "../components/common/navBar/navBar.style";

export default function Layout() {
  // if (Platform.OS === "web") {
  //   return <Slot />;
  // }
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: COLORS.lightWhite, color: "#004950" },
      }}
    >
      <Tabs.Screen
        name="index"
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
