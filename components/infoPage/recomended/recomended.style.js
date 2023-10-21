import { Dimensions, StyleSheet, Platform } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants/index";

const { width, height } = Dimensions.get("window");
console.log

const styles =
  Platform.OS === "web"
    ? StyleSheet.create({
      recomContainer: { flex:1, padding: SIZES.medium, justifyContent:'flex-start'},
      titleText: {
        fontFamily: FONT.homenaje,
        fontSize: SIZES.large,
        textDecorationLine: "underline",
      },
      cardsConatiner: {flex:1, flexDirection: "row", width:"100%", flexWrap: "wrap", height: 200, justifyContent:'flex-end'},
      cardContainer: { width: 100, margin: SIZES.large },
      image: {
        width: "100%",
        height: '70%',
        borderRadius: SIZES.large,
        marginBottom: SIZES.xxSmall,
      },
      nameText: {
        fontFamily: FONT.homenaje,
        fontSize: SIZES.medium,
        marginStart: SIZES.xSmall,
        alignContent: 'center',
        justifyContent: 'center',
      },
      })
    : StyleSheet.create({
        recomContainer: { 
          flex:1, 
          padding: SIZES.medium, 
          height:"100%", 
          justifyContent:'flex-end',
        },
        titleText: {
          fontFamily: FONT.homenaje,
          fontSize: SIZES.large,
          textDecorationLine: "underline",
        },
        cardsConatiner: {
          flex:1, 
          flexDirection: "row", 
          flexWrap: "wrap"
        },
        cardContainer: { 
          width: '100%', 
          margin: SIZES.small,
          marginLeft: 0
        },
        image: {
          width: 120,
          height: 100,
          borderRadius: SIZES.large,
          marginBottom: SIZES.xxSmall,
          alignSelf: 'center',
        },
        nameText: {
          fontFamily: FONT.homenaje,
          fontSize: SIZES.medium,
          textAlign: 'center',
          width: 120,
        },
      });

export default styles;
