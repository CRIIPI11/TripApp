import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native";
import styles from "./tags.style";

const Tags = ({ tags }) => {
  return (
    <ScrollView
      style={styles.tagsContainer}
      horizontal={true}
      showsHorizontalScrollIndicator={true}
    >
      {tags.map((tag, index) => (
        <View key={index} style={styles.tagItem}>
          <Text key={index} style={styles.textContainer}>
            {tag}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Tags;
