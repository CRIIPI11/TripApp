import { Text, Image, View } from "react-native";
import { images } from "../../../constants";
import style from "./profileheader.style";

const ProfileHeader = () => {
  const user = null;
  return (
    <View style={style.headerContainer}>
      <Image source={images.pfp} style={style.pfp} />
      <Text style={style.name}>{user ? user : "Dev Test"}</Text>
    </View>
  );
};

export default ProfileHeader;
