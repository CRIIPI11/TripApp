import { View, TextInput, Image } from "react-native";
import styles from "./searchBar.style";
import { COLORS, icons } from "../../../constants";

const SearchBar = (props) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <Image source={icons.search} style={styles.icon} />
        <TextInput
          placeholder="Where is life taking you?"
          placeholderTextColor={COLORS.accents6}
          clearButtonMode="always"
          style={styles.searchInput}
          value={props.search}
          onChange={(text) => {
            props.onchange(text.nativeEvent.text);
          }}
          onSubmitEditing={() => {
            props.onclick();
          }}
        />
      </View>
    </View>
  );
};

export default SearchBar;
