import { StatusBar } from "react-native";
import { Slot, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { store } from "../redux/store";
import { Provider, useSelector } from "react-redux";

function LoggedInCheck() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  if (!isLoggedIn) {
    return <Slot />;
  }

  return (
    <>
      <StatusBar barStyle={"dark-content"} />
    </>
  );
}

export default function Layout() {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    HomenajeRegular: require("../assets/fonts/Homenaje-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  if (Platform.OS === "web") {
    return (
      <Provider store={store}>
        <Slot />
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
}
