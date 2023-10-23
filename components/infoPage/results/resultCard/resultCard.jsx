import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { images } from '../../../constants';

const ResultCard = ({ title, description, image, router, props, dispatch }) => {
    const info = {
        name: title,
        desc: description,
        img: image,
    };

    const setInfo = (info) => {
        return {
            type: 'SET_INFO',
            payload: info,
        };
    };
    
        return (
            <TouchableOpacity
                key={title}
                activeOpacity={1}
                onPress={() => {
                    dispatch(setInfo(info));
                    router.push(`discover/(info)/${info}`);
                }}
            >
                <View style={styles.cardContainer}>
                    <View style={styles.imageContainer}>
                        {/* <Image source={{ uri: image }} style={styles.image}></Image> */}
                        {/* <Image
                        source={{ uri: item.item.img.url }}
                        style={styles.image}
                        ></Image> */}
                        {img !== null ? (
                            <Image source={{ uri: item.item.img.url }} style={styles.image}></Image>
                        ) : (
                            <Image source={images.noimage} style={styles.image}></Image>
                        )}
                    </View>

                    <View style={styles.textContainer}>
                        <View style={{}}>
                            <Text style={styles.nameText}>{title}</Text>
                        </View>
                        <Text numberOfLines={5} ellipsizeMode="tail" style={styles.descText}>
                            {description}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    const styles = StyleSheet.create({
        card: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 10,
            padding: 10,
            marginVertical: 5,
            marginHorizontal: 10,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        image: {
            width: 80,
            height: 80,
            borderRadius: 10,
            marginRight: 10,
        },
        textContainer: {
            flex: 1,
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 5,
        },
        description: {
            fontSize: 14,
            color: '#666',
        },
    });

    export default ResultCard;
