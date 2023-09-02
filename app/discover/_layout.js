import { Platform } from "react-native";
import { Slot, Stack } from "expo-router";

export default function Layout() {
  if (Platform.OS === "web") {
    return <Slot />;
  }
  return <Stack />;
}
