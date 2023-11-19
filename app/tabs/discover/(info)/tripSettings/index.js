import {
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, icons } from "../../../../../constants";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

const TripSettingPage = () => {
  //TODO: Ensure that this takes the destination from the previous page
  const [tripName, setTripName] = useState("");
  const [categories, setCategories] = useState([]);
  const [stopCount, setStopCount] = useState(0);
  const { lat, lng, plan } = useLocalSearchParams();
  const router = useRouter();

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
          headerTitle: "Trip Settings",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#fff" },
          headerTintColor: "#000",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Text style={styles.title}>Trip Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Trip Name"
        onChangeText={setTripName}
        value={tripName}
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

      <View style={styles.stopCount}>
        <Text style={styles.title}>Desired Number of Stops</Text>
        <View style={styles.counter}>
          <TouchableOpacity
            onPress={() => {
              setStopCount(stopCount - 1);
            }}
          >
            <Image
              source={icons.minus_circle}
              style={styles.stopCounterIcons}
            />
          </TouchableOpacity>
          <Text style={styles.catname}>{stopCount}</Text>
          <TouchableOpacity
            onPress={() => {
              setStopCount(stopCount + 1);
            }}
          >
            <Image source={icons.add_circle} style={styles.stopCounterIcons} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log(categories);
          router.push({
            pathname: "../../../setup/tripSetup",
            params: {
              lat: lat,
              lng: lng,
              tripName: tripName,
              categories: categories,
              stopCount: stopCount,
            },
          });
        }}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: "black",
    marginRight: 10,
  },
  container: {
    paddingStart: 20,
    backgroundColor: "#c2c1be",
    borderRadius: 20,
    margin: 10,
  },
  optcont: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  catname: {
    fontSize: 25,
    alignContent: "center",
    alignItems: "center",
  },
  stopCount: {
    fontSize: 25,
    alignContent: "center",
    alignItems: "center",
  },

  button: {
    alignItems: "center",
    alignContent: "center",
    backgroundColor: COLORS.tertiary,
    padding: 10,
    margin: 10,
    width: 150,
    borderRadius: 20,
    alignSelf: "center",
  },
  stopCounterIcons: {
    width: 30,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  counter: {
    flexDirection: "row",
    width: 150,
    justifyContent: "space-between",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default TripSettingPage;
