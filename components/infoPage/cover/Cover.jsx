import React from "react";
import { Text, View, Image } from "react-native";

import { icons } from "../../../constants/index";
import styles from "./cover.style";

const Cover = (props) => {
  return (
    <View style={styles.coverContainer}>
      <Image source={{ uri: props?.img }} style={styles.image} />
      <View style={styles.subTitleContainer}>
        <Image source={icons.fire} style={styles.icon} />
        <Text style={styles.subTitleText}>Popular Categories</Text>
      </View>
      <View style={styles.bulletsContainer}>
        {props.pop?.map((item) => (
          <Text key={item} style={styles.bulletsText}>{`\u2023 ${item} `}</Text>
        ))}
      </View>
    </View>
  );
};

export default Cover;