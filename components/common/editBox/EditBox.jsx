import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./editbox.style";
import { useState } from "react";
import axios from "axios";

const EditBox = ({ name, close }) => {
  const [text, setText] = useState("");

  const update = () => {
    const url = process.env.server_url;

    if (name === "User Name") {
      axios
        .put(`${url}/Users/update/name`, {
          name: text,
        })
        .then((res) => {
          if (res.data.result === "Success") {
            Alert.alert("Success", "Name Was Changed Successfully", [
              {
                text: "ok",
                onPress: () => close(false),
                style: "cancel",
              },
            ]);
          } else {
            Alert.alert("Error", res.data.message.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (name === "Email") {
      axios
        .put(`${url}/Users/update/email`, {
          email: text,
        })
        .then((res) => {
          if (res.data.result === "Success") {
            Alert.alert("Success", "Email Was Changed Successfully", [
              {
                text: "ok",
                onPress: () => close(false),
                style: "cancel",
              },
            ]);
          } else {
            Alert.alert("Error", res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <View style={styles.editContainer}>
      <View>
        <View style={styles.body}>
          <Text style={styles.editText}>{name}</Text>
          <TextInput
            placeholder={name}
            style={styles.optionInput}
            onChangeText={setText}
            value={text}
          />
        </View>
      </View>
      <View style={styles.editfooter}>
        <TouchableOpacity style={styles.footBut} onPress={() => close(false)}>
          <Text style={styles.footText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footBut} onPress={update}>
          <Text style={styles.footText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditBox;
