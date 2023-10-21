import { StyleSheet, Image, TouchableOpacity, Text, TextInput, View, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Expo's SDK
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/userSlice';
import { COLORS } from '../../constants';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const Login = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        const LOGIN_ENDPOINT = `${process.env.LOCAL_API_URL}${process.env.LOGIN_ENDPOINT}`; // TODO: Change to depend on environment

        setIsLoading(true);

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
                setErrorMessage(''); // Reset error message if visible
                dispatch(loginUser({ 
                    email: resData.user.email, 
                    name: resData.user.name,
                    preferences: resData.user.preferences,
                    tripsCounter: resData.user.tripsCounter,
                    placesVisited: resData.user.placesVisited,
                    isLoggedIn: true
                })); // Store user data in Redux
                setIsLoading(false);
                router.replace('discover');
            } else {
                setIsLoading(false);
                console.log(`Server: ${resData.message.message}`);
                if (resData.message.code == 101) {
                    setErrorMessage("Email or password is incorrect, please try again");
                } else {
                    setErrorMessage(resData.message.message);
                }
            }
        } catch (error) {
            setIsLoading(false);
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

                {isLoading ? <ActivityIndicator size="large" color={COLORS.primary} /> : (
                    <TouchableOpacity style={styles.primaryButton}>
                        <Text style={styles.buttonText} onPress={handleLogin}>Sign in</Text>
                    </TouchableOpacity>
                )}

                {isLoading ? null : (
                    <TouchableOpacity
                    style={styles.secondaryButton}
                    onPress={() => {
                        router.push('register');
                    }}
                >
                    <Text style={styles.buttonText}>Register</Text>
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
    errorText: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    }
});

export default Login;
