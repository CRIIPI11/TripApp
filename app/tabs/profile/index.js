import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, View, Text } from "react-native";
import {
  ProfileHeader,
  SettingsCard,
  HistoryCard,
} from "../../../components/profilePage";

const Home = () => {
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

export default Home;
