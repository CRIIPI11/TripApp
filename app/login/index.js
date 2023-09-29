import { StyleSheet, Image, TouchableOpacity, Text, TextInput } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'; // Expo's SDK
import { COLORS, SIZES } from "../../constants";

const Login = () => {
  return (
    <SafeAreaView>
        <Image style={styles.logo} source={require('../../assets/images/navinomad_logo.png')} />

        <TextInput style={ styles.input } placeholder='Email' />
        <TextInput style={ styles.input } placeholder='Password' />
        
        <TouchableOpacity style={ styles.primaryButton }>
            <Text style={ styles.buttonText }>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.secondaryButton }>
            <Text style={ styles.buttonText }>Register</Text>
        </TouchableOpacity>
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
    }
})

export default Login;