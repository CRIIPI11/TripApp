import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';

const TripCard = ({ title, numberOfStops, dest }) => {

    const router = useRouter();

    //TODO: need to call for user info to get the user's trips

    const handlePress = () => {
        console.log('Trip card pressed!');
        console.log(dest);

        //TODO: Add logic to navigate to the trip info page

        //router.push('/tripInfo', { dest: dest });
    };

    return (
        <TouchableOpacity style={styles.card} onPress={handlePress}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.stops}>Number of Stops: {numberOfStops}</Text>
        </TouchableOpacity>
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
