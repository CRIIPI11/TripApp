import { StyleSheet, Image, TouchableOpacity, Text, TextInput, SafeAreaView } from "react-native";
import { COLORS, SIZES } from "../../constants";

const Login = () => {
  return (
    <SafeAreaView>
        <Image style={styles.logo} source={require('../../assets/images/navinomad_logo.png')} />

        <Text style={ styles.label }>Email</Text>
        <TextInput style={ styles.input } value='Enter username' />
        <Text style={ styles.label }>Password</Text>
        <TextInput style={ styles.input } value='Enter password' />
        
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
        padding: 10
    },

    label: {
        textAlign: 'center',
        textAlign: 'left',
        paddingLeft: 12
    },

    primaryButton: {
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: SIZES.radius
    },
    secondaryButton: {
        backgroundColor: COLORS.secondary,
        padding: 10,
        borderRadius: SIZES.radius
    },
    buttonText: {
        color: COLORS.white,
        textAlign: 'center'
    }
})

export default Login;