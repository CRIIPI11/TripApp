import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import {
  ProfileHeader,
  SettingsCard,
  HistoryCard,
} from "../../components/profilePage";

const profile = () => {
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
