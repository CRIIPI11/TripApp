import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, icons } from "../../constants";
import axios from "axios";

const preferences = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const url = process.env.server_url;

  useEffect(() => {
    console.log(url);
    axios
      .get(`${url}/Users/me`)
      .then((res) => {
        setCategories(res.data.preferences);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const update = () => {
    axios
      .put(`${url}/Users/update/preferences`, {
        preferences: categories,
      })
      .then((res) => {
        if (res.data.result === "Success")
          Alert.alert("Success", "Preferences updated successfully", [
            {
              text: "ok",
              onPress: () => router.back(),
              style: "cancel",
            },
          ]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const data = [
    { name: "Art & Culture", code: "artAndCulture" },
    { name: "Museums", code: "museums" },
    { name: "Architecture", code: "architecture" },
    { name: "Roadside Attractions", code: "roadsideAttractions" },
    { name: "Food & Drink", code: "foodAndDrink" },
    { name: "Nature", code: "nature" },
    { name: "History", code: "history" },
  ];

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Preferences",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#fff" },
          headerTintColor: "#000",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Select Categories</Text>
        {data.map((item) => {
          return (
            <View style={styles.optcont} key={item.name}>
              <TouchableOpacity
                onPress={() => {
                  setCategories({
                    ...categories,
                    [item.code]: !categories[item.code],
                  });
                }}
              >
                <Image
                  source={
                    categories[item.code]
                      ? icons.Checkbox_Check
                      : icons.Checkbox_Unchecked
                  }
                  style={styles.icon}
                />
              </TouchableOpacity>
              <Text style={styles.catname}>{item.name}</Text>
            </View>
          );
        })}
      </View>
      <TouchableOpacity style={styles.button} onPress={update}>
        <Text style={styles.buttontext}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  optcont: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: "black",
    marginRight: 10,
  },
  catname: {
    fontSize: 25,
  },
  container: {
    paddingStart: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: COLORS.secondary,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    margin: 10,
  },
  buttontext: {
    fontSize: 25,
    color: "white",
  },
});

export default preferences;
