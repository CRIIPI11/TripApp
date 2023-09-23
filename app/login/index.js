import { StyleSheet, TouchableOpacity, Text, TextInput, SafeAreaView } from "react-native";
import { COLORS, SIZES } from "../../constants";

const Login = () => {
  return (
    <SafeAreaView>
        <Text style={{ textAlign: 'center' }}>Email</Text>
        <TextInput style={ styles.input } value='Enter username' />
        <Text style={{ textAlign: 'center' }}>Password</Text>
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
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