import { FlatList, Text, View } from "react-native";
import OptionCard from "../optionCard/OptionCard";
import styles from "./list.style";

const List = ({ places }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={places}
        renderItem={(item) => (
          <OptionCard
            key={item.index}
            name={item.item.place}
            img={item.item.img.url}
            types={item.item.types}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default List;
