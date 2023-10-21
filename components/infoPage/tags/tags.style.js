import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
    tagsContainer: {
        flex: 1, 
        flexDirection: "row",
        alignContent: "center",
    },
    tagItem:{
        padding: 2,
    },
    textContainer: {
        width:"100%",
        backgroundColor: COLORS.tertiary,
        padding: 5,
        borderRadius: 30,
        fontSize: 12,
        margin: 2,
        textAlign: "center",
    },
});

export default styles;