import { StatusBar } from "react-native";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import { store } from "../redux/store";
import { Provider } from "react-redux";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    HomenajeRegular: require("../assets/fonts/Homenaje-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
}
