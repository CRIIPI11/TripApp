import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./options.style";
const Options = () => {
  return (
    <View style={styles.optionsContainer}>
      <TouchableOpacity onPress={() => {}} style={styles.buttonContainer}>
        <Text style={styles.optionText}>Plan Trip</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.buttonContainer}>
        <Text style={styles.optionText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Options;
