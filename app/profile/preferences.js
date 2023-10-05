import { Stack } from "expo-router";
import { useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONT, icons } from "../../constants";

const preferences = () => {
  const [categories, setCategories] = useState([]);
  const data = [
    "Art & Culture ",
    "Museums",
    "Architecture",
    "Roadside Attractions",
    "Food & Drink",
    "Nature",
    "History",
  ];

  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: true }} />
      <View style={styles.container}>
        <Text style={styles.title}>Select Categories</Text>
        {data.map((item) => {
          return (
            <View style={styles.optcont}>
              <TouchableOpacity
                onPress={() => {
                  setCategories(
                    categories.find((e) => e === item) === undefined
                      ? [...categories, item]
                      : categories.filter((e) => e !== item)
                  );
                }}
              >
                <Image
                  source={
                    categories.find((e) => e === item) === undefined
                      ? icons.Checkbox_Unchecked
                      : icons.Checkbox_Check
                  }
                  style={styles.icon}
                />
              </TouchableOpacity>
              <Text style={styles.catname}>{item}</Text>
            </View>
          );
        })}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttontext}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  optcont: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: "black",
    marginRight: 10,
  },
  catname: {
    fontSize: 25,
    fontFamily: FONT.homenaje,
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontFamily: FONT.homenaje,
    textDecorationLine: "underline",
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
    fontFamily: FONT.homenaje,
  },
});

export default preferences;
