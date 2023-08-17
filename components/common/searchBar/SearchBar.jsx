import { View, TextInput, Platform } from "react-native";
import { styles, stylesWeb } from "./searchBar.style";

const SearchBar = (props) => {
  return (
    <View
      style={
        Platform.OS == "web"
          ? stylesWeb.searchContainer
          : styles.searchContainer
      }
    >
      <View
        style={
          Platform.OS == "web" ? stylesWeb.searchWrapper : styles.searchWrapper
        }
      >
        <TextInput
          placeholder="Where is life taking you?"
          placeholderTextColor="black"
          clearButtonMode="always"
          style={
            Platform.OS == "web" ? stylesWeb.searchInput : styles.searchInput
          }
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
