import { Redirect } from "expo-router";
import { Text } from "react-native";
const Home = () => {
  return <>
  <Text>Home Page</Text>
  <Redirect href={"login/"} />;
  </>
};

export default Home;
