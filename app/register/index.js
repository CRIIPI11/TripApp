import { StyleSheet, Image, TouchableOpacity, Text, TextInput, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from "../../constants";
import { useRouter } from "expo-router";

const Register = () => {

    const router = useRouter();

    return (
        <SafeAreaView style={ styles.container }>
            <TouchableOpacity onPress={() => {router.back()}}>
                <Image style={ styles.backButton } source={require('../../assets/icons/chevron-left.png')} />
            </TouchableOpacity>
            <View style={ styles.content }>
                <Image style={styles.logo} source={require('../../assets/images/navinomad_logo.png')} />
                <TextInput style={ styles.input } placeholder='Name' />
                <TextInput style={ styles.input } placeholder='Email' />
                <TextInput style={ styles.input } placeholder='Password' secureTextEntry={true} />
                <TextInput style={ styles.input } placeholder='Confirm Password' secureTextEntry={true} />
                <TouchableOpacity style={ styles.primaryButton }>
                    <Text style={ styles.buttonText }>Register</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    logo : {
        alignSelf: 'center',
        width: 300,
        height: 300
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 50
    },

    primaryButton: {
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 50,
        marginHorizontal: 90,
        marginVertical: 10
    },

    secondaryButton: {
        backgroundColor: COLORS.secondary,
        padding: 10,
        borderRadius: 50,
        marginHorizontal: 90,
        marginVertical: 10
    },

    buttonText: {
        color: COLORS.white,
        textAlign: 'center'
    },

    container: {
        flex: 1,
    },

    content: {
        flex: 1,
        justifyContent: 'center',
    },

    backButton: {
        width: 50,
        height: 50
    }
});

export default Register;