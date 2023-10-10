import { Stack } from "expo-router";
import { useState } from "react";
import { Text, View, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EditBox from "../../components/common/editBox/EditBox";
import axios from "axios";

const passwordUpdate = () => {
  const url = process.env.server_url;
  axios
    .put(`${url}/Users/update/password`)
    .then((res) => {
      Alert.alert(res.data.result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const profilesettings = () => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Edit Information",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#fff" },
          headerTintColor: "#000",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <View style={styles.settingsContainer}>
        {edit ? (
          <EditBox name={name} close={setEdit} />
        ) : (
          <>
            <Text style={styles.title}>Profile Settings</Text>
            <View style={styles.optContainer}>
              <Text style={styles.optionTitle}>User Name</Text>
              <TouchableOpacity
                style={styles.editBut}
                onPress={() => {
                  setName("User Name");
                  setEdit(!edit);
                }}
              >
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.optContainer}>
              <Text style={styles.optionTitle}>Email</Text>

              <TouchableOpacity
                style={styles.editBut}
                onPress={() => {
                  setName("Email");
                  setEdit(!edit);
                }}
              >
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.optContainer}>
              <Text style={styles.optionTitle}>Password</Text>

              <TouchableOpacity style={styles.editBut} onPress={passwordUpdate}>
                <Text>Send Recovery Email</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  settingsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  optContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  optionTitle: {
    fontSize: 25,
  },
  optionInput: {
    borderBottomWidth: 1,
    borderColor: "#000",
    width: "50%",
  },
  editBut: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
  butText: {},
});

export default profilesettings;
