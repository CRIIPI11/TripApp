import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./editbox.style";

const EditBox = ({ name, close }) => {
  return (
    <View style={styles.editContainer}>
      <View>
        <View style={name === "Password" ? styles.firstBody : styles.body}>
          <Text style={styles.editText}>{name}</Text>
          <TextInput placeholder={name} style={styles.optionInput} />
        </View>
        {name === "Password" && (
          <View style={styles.body}>
            <Text style={styles.editText}>Confirm</Text>
            <TextInput
              placeholder="Confirm Password"
              style={styles.optionInput}
            />
          </View>
        )}
      </View>
      <View style={styles.editfooter}>
        <TouchableOpacity style={styles.footBut} onPress={() => close(false)}>
          <Text style={styles.footText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footBut} onPress={() => {}}>
          <Text style={styles.footText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditBox;
