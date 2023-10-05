import { Stack } from "expo-router";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const profilesettings = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: true }} />
      <View>
        <Text>Profile Settings</Text>
        <TextInput placeholder="Name" />
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
        <TextInput placeholder="Confirm Password" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default profilesettings;
