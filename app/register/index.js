import { ActivityIndicator, Alert, StyleSheet, Image, TouchableOpacity, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const Register = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleRegistration = async () => {
        const SIGNUP_ENDPOINT = `${process.env.LOCAL_API_URL}${process.env.REGISTER_ENDPOINT}` // TODO: Change to depend on environment
        const lowerEmail = email.toLowerCase();

        // Check if passwords match
        if (password !== passwordConfirm) {
            setErrorMessage('Passwords do not match');
            return;
        }

        setIsLoading(true);        

        try {
            const response = await fetch(SIGNUP_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: `{
                    "name": "${name}",
                    "email": "${lowerEmail}",
                    "password": "${password}"
                }`
            });

            if (!response.ok) {
                console.log('Error during signup process');
                setIsLoading(false);
                throw new Error('Error during signup process');
            }

            const resData = await response.json();
            console.log(resData);
            if (resData.result === 'success') {
                console.log('Signup success');
                setIsLoading(false);

                // Take user back to login so that they login
                // Login page will capture data into redux once successfully logged in

                // TODO: There should be an email verification process; thus, user should
                // not be logged in automatically after signing up.
                // The verification screen will serve as confirmation that the signup was successful.
                Alert.alert(
                    'Signup successful',
                    'You will be redirected to the login screen',
                    [
                        {
                            text: 'OK',
                            onPress: () => {
                                router.replace('login');
                            }
                        }
                    ]
                );
            } else {
                console.log(`Server: ${resData.message.message}`);
                setIsLoading(false);
                if (resData.message.message.includes('empty')) {
                    setErrorMessage('Please fill out all fields');
                } else {
                    setErrorMessage(resData.message.message);
                }
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    router.back();
                }}
            >
                <Image style={styles.backButton} source={require('../../assets/icons/chevron-left.png')} />
            </TouchableOpacity>
            <View style={styles.content}>
                <Image style={styles.logo} source={require('../../assets/images/navinomad_logo.png')} />
                <TextInput style={styles.input} placeholder="Name" onChangeText={setName} value={name} />
                <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} value={email} />
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={setPassword} value={password} />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    onChangeText={setConfirmPassword}
                    value={passwordConfirm}
                />

                {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

                {isLoading ? <ActivityIndicator size="large" color={COLORS.primary} /> : (
                <TouchableOpacity style={styles.primaryButton}>
                    <Text style={styles.buttonText} onPress={handleRegistration}>Register</Text>
                </TouchableOpacity>
                )}
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

    backButton: {
        width: 50,
        height: 50
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    }
});

export default Register;
