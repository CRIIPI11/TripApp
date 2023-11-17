import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { useLocationStore } from "../../../hooks";

const Loading = () => {
    const router = useRouter();
    const { startLocation } = useLocationStore();

    useEffect(() => {
        startLocation().then(() => {
            router.replace("tabs");
        });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    loadingContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16
    }
})

export default Loading;