
// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';

// const Results = () => {
    const data = [
        {
            id: 1,
            name: 'Place 1',
            description: 'Description 1',
            image: 'https://via.placeholder.com/200x110',
        },
        {
            id: 2,
            name: 'Place 2',
            description: 'Description 2',
            image: 'https://via.placeholder.com/200x110',
        },
        {
            id: 3,
            name: 'Place 3',
            description: 'Description 3',
            image: 'https://via.placeholder.com/200x110',
        },
    ];

//     return (
//         <View style={styles.container}>
//             {data.map((item) => (
//                 <View key={item.id} style={styles.card}>
//                     <View style={styles.imageContainer}>
//                         <Image source={{ uri: item.image }} style={styles.image} />
//                     </View>
//                     <View style={styles.textContainer}>
//                         <Text style={styles.name}>{item.name}</Text>
//                         <Text style={styles.description}>{item.description}</Text>
//                     </View>
//                 </View>
//             ))}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'column',
//         flexWrap: 'wrap',
//         padding: 15,
//     },
//     card: {
//         width: '100%',
//         height: 150,
//         backgroundColor: '#fff',
//         borderRadius: 1,
//         marginBottom: 5, // Updated marginBottom to 5
//         padding: 10,
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//         flexDirection: 'row',
//     },
//     imageContainer: {
//         width: '30%',
//     },
//     image: {
//         width: '100%',
//         height: '100%',
//         borderRadius: 20,
//         marginBottom: 10,
//     },
//     textContainer: {
//         width: '70%',
//         paddingLeft: 10,
//         paddingTop: 10,
//         flexDirection: 'column',
//     },
//     name: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 0,
//         textAlign: 'center',
//     },
//     description: {
//         fontSize: 14,
//         textAlign: 'center',
//     },
// });

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Results = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                {data.map((item) => (
                    <View key={item.id} style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    </View>
                ))}
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.column}>
                    <Text style={styles.columnTitle}>Column 1</Text>
                    <Text style={styles.columnText}>This is some text in column 1.</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.columnTitle}>Column 2</Text>
                    <Text style={styles.columnText}>This is some text in column 2.</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    topContainer: {
        width: '100%',
        height: '80%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    bottomContainer: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
    },
    //top cards
    card: {
        width: '95%',
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 1,
        marginBottom: 5,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
    },
    imageContainer: {
        width: '30%',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        marginBottom: 10,
    },
    textContainer: {
        width: '70%',
        paddingLeft: 10,
        paddingTop: 10,
        flexDirection: 'column',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 0,
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
    },
    //bottom cards
    column: {
        width: '30%',
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginBottom: 5,
        marginHorizontal: 5,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'column',
        alignItems: 'center',
    },
    columnTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    columnText: {
        fontSize: 14,
        textAlign: 'center',
    },
});

export default Results;

