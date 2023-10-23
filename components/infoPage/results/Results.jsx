import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { useDispatch } from "react-redux";
import { setInfo } from "../../../redux/infoSlice";
import { useRouter } from "expo-router";
import { images } from "../../../constants";
import styles from "./results.style";

const Results = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  console.log("props: ", props.img)


  return (
    <View style={styles.resultContainer}>
      <View style={styles.cardsConatiner}>
        <FlatList
          data={props.places}
          horizontal={false}
          renderItem={(item) => {
            return (
              <TouchableOpacity

                key={item.item.place}
                activeOpacity={1}
                onPress={() => {
                  //TODO: test the dispatch
                  dispatch(
                    setInfo({
                      place: item.item.place,
                      img: item.item.img ? item.item.img.url : "no image",
                      desc: item.item.desc,
                      rating: item.item.rating,
                      vicinity: item.item.vicinity,
                      types: item.item.types,
                      location: item.item.location,
                    })
                    );
                  router.push(`discover/(info)/${item.item.place}`);
                }}
              >
                <View style={styles.cardContainer}>
                    <View style={styles.imageContainer}>

                        {item.item.img !== null ? (
                            <Image source={{ uri: item.item.img.url }} style={styles.image}></Image>
                        ) : (
                            <Image source={images.noimage} style={styles.image}></Image>
                        )}
                    </View>
                    
                    <View style={styles.textContainer}>
                        <View style={{}}>
                            <Text style={styles.nameText}>{item.item.place}</Text>
                        </View>
                        <Text
                            numberOfLines={5}
                            ellipsizeMode="tail"
                            style={styles.descText}
                        >
                            {item.item.desc}
                        </Text>
                    </View>
                </View>
              </TouchableOpacity>
            );
          }}
          indicatorStyle={"black"}
        />
      </View>
    </View>

    // <View style={styles.resultContainer}> 
    //   <View style={styles.cardsConatiner}>
    //     <FlatList
    //       data={props.places}
    //       horizontal={false}
    //       renderItem={(item) => {
    //         return (
    //           <TouchableOpacity
    //             key={item.item.place}
    //             activeOpacity={1}
    //             onPress={() => {
    //               dispatch(
    //                 setInfo({
    //                   name: props.name,
    //                   img: props.img,
    //                   desc: props.desc,
    //                 })
    //               );
    //             }}
    //           >
    //           </TouchableOpacity>
    //         );
    //       }
    //     }
    //     indicatorStyle={"black"}
    //     />
    //     </View>
    // </View>
    );
};

export default Results;



