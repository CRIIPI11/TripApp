import { StyleSheet, Image, TouchableOpacity, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Expo's SDK
import { COLORS } from '../../constants';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        const LOGIN_ENDPOINT = 'http://localhost:1337/Users/login'; // For local debugging

        const lowerEmail = email.toLowerCase();
        console.log(`Lower email: ${lowerEmail}`);
        try {
            const response = await fetch(LOGIN_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: `{
                    "email": "${lowerEmail}",
                    "password": "${password}"
                }`
            });

            if (!response.ok) {
                console.log("Error during login process");
                throw new Error('Error during login process');
            }

            const resData = await response.json();
            console.log(resData);
            if (resData.result === 'success') {
                console.log("Success");
                setErrorMessage('');
                router.replace('discover');
            } else {
                console.log(`Server: ${resData.message.message}`);
                if (resData.message.code == 101) {
                    setErrorMessage("Email or password is incorrect, please try again");
                } else {
                    setErrorMessage(resData.message.message);
                }
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image style={styles.logo} source={require('../../assets/images/navinomad_logo.png')} />

                <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} value={email} />
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={setPassword} value={password} />

                {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

                <TouchableOpacity style={styles.primaryButton}>
                    <Text style={styles.buttonText} onPress={handleLogin}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.secondaryButton}
                    onPress={() => {
                        router.push('register');
                    }}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    logo: {
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
        flex: 1
    },
    content: {
        flex: 1,
        justifyContent: 'center'
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    }
});

export default Login;
