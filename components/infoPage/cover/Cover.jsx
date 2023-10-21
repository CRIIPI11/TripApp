import React from "react";
import { Text, View, Image } from "react-native";

import { icons, images } from "../../../constants/index";
import styles from "./cover.style";
import Tags from "../tags/tags";

const Cover = (props) => {
  return (
    <View style={styles.coverContainer}>
      {props.img !== "no image" ? (
        <Image source={{ uri: props.img }} style={styles.image}></Image>
      ) : (
        <Image source={images.noimage} style={styles.image}></Image>
      )}
      <View style={styles.subTitleContainer}>
        <Tags tags={props.pop} /> 
        <Text style={styles.subTitleText}>{props.add}</Text>
      </View>
    </View>
  );
};

export default Cover;
