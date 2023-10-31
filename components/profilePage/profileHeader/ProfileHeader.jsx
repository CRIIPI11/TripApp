import { Text, Image, View } from "react-native";
import { images } from "../../../constants";
import style from "./profileheader.style";
import { useSelector } from "react-redux";

const ProfileHeader = () => {
  const user = useSelector((state) => state.user);

  return (
    <View style={style.headerContainer}>
      <Image source={images.pfp} style={style.pfp} />
      <Text style={style.name}>{user ? user.name : "Dev Test"}</Text>
    </View>
  );
};

export default ProfileHeader;
