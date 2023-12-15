import { View, TextInput, Image } from "react-native";
import styles from "./searchBar.style";
import { COLORS, icons } from "../../../constants";

const SearchBar = ({ search, onChange, onclick }) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <Image source={icons.search} style={styles.icon} />
        <TextInput
          placeholder="Where is life taking you?"
          placeholderTextColor={COLORS.accents6}
          clearButtonMode="always"
          style={styles.searchInput}
          value={search}
          onChange={(text) => {
            onChange(text.nativeEvent.text);
          }}
          onSubmitEditing={() => {
            onclick();
          }}
        />
      </View>
    </View>
  );
};

export default SearchBar;
