import "expo-router/entry";
import {APPLICATION_ID, JAVASCRIPT_ID} from ".env";
import Parse from "parse/react-native.js";
import AsyncStorage from "@react-native-async-storage/async-storage";


//Initializing the SDK
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(APPLICATION_ID, JAVASCRIPT_ID);
Parse.serverURL = "https://parseapi.back4app.com/";

console.log("this is a test");

(async () => {
    const User = new Parse.User();
    const query = new Parse.Query(User);
  
    try {
      let user = await query.get('GeMzjFU0kc');
      console.log('User found', user);
    } catch (error) {
      console.error('Error while fetching user', error);
    }
  })();
  
