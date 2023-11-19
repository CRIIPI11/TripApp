import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import { setInfo } from '../../redux/infoSlice';
import { useDispatch } from "react-redux";

const TripCard = ({ userTrips}) => {
    const router = useRouter();
    const dispatch = useDispatch();

    //TODO: need to call for user info to get the user's trips

    const handlePress = () => {
        console.log('Trip card pressed!');
        console.log(dest);

        //TODO: Add logic to navigate to the trip info page

        //router.push('/tripInfo', { dest: dest });
    };

    return (
        <FlatList
            data = {userTrips}
            horizontal={false}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity 
                        style={styles.card}
                        key={item.tripName}
                        activeOpacity={1}
                        onPress={() => {
                            dispatch(
                                setInfo({
                                    tripName: item.tripName,
                                    stopCount: item.stopCount,
                                    stops: item.stops,
                                    coords: item.coords,
                                })
                            );
                            router.replace(`tabs/forum/tripInfo`);//TODO: need to make the trip info page
                        }}
                    >
                        <Text style={styles.title}>{item.tripName}</Text>
                        <Text style={styles.stops}>Number of Stops: {item.stopCount}</Text>
                    </TouchableOpacity>
                );
            }}
            indicatorStyle={'black'}
        />







        // <TouchableOpacity style={styles.card} onPress={handlePress}>
        //     <Text style={styles.title}>{title}</Text>
        //     <Text style={styles.stops}>Number of Stops: {numberOfStops}</Text>
        // </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    stops: {
        fontSize: 16,
    },
});

export default TripCard;
