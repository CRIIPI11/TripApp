import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  ProfileHeader,
  SettingsCard,
  HistoryCard,
} from "../../components/profilePage";
import { Link, Stack, useRouter } from "expo-router";

const profile = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileHeader />
        <HistoryCard />
        <SettingsCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
