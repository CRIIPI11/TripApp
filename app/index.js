import { Redirect } from "expo-router";
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage'


//Initialize the SDK
Parse.setAsyncStorage(AsyncStorage);
//initializing with the Application ID and the Javascript key
//aint sure if this is a dangerous spot to put it in teehee


const Home = () => {
  return <Redirect href={"login/"} />;
};


export default Home;

//i believe this is where i should place the database connection 
