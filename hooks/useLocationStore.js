import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import {
  onLogin,
  onSetErrorMsg,
  onSetLoadingLocation,
} from "../redux/location/locationSlice";

export const useLocationStore = () => {
  const dispatch = useDispatch();
  const { location, loading, errorMsg } = useSelector(
    (state) => state.location
  );

  const getLocation = async () => {
    const { status } = await requestForegroundPermissionsAsync();

    if (status !== "granted") {
      dispatch(onLogin({ permission: status }));
      dispatch(onSetErrorMsg("Permission to access location was denied"));
      return;
    }

    const location = await getCurrentPositionAsync();
    dispatch(
      onLogin({
        location: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        },
        permission: status,
      })
    );
  };

  const startLocation = async () => {
    dispatch(onSetLoadingLocation(true));
    try {
      await getLocation();
    } catch (error) {
      console.log(error);
      dispatch(onSetErrorMsg(error.message));
    }
  };

  return {
    //properties
    location,
    loading,
    errorMsg,
    //methods
    startLocation,
  };
};
