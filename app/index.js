import { Redirect } from "expo-router";
import { useSelector } from "react-redux";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  if (!isLoggedIn) {
    return <Redirect href={"login/"} />;
  } else {
    return <Redirect href={"tabs/"} />;
  }
};

export default Home;
