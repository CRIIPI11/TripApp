import { useDispatch, useSelector } from "react-redux";
import { onSetTrip, onEnd } from "../redux/activeTrip/activeSlice";

export const useActiveTripStore = () => {
  const dispatch = useDispatch();
  const { active, trip } = useSelector((state) => state.active);

  const ActivateTrip = (trip) => {
    dispatch(onSetTrip(trip));
  };

  const EndTrip = () => {
    dispatch(onEnd());
  };

  return {
    //properties
    active,
    trip,
    //methods
    ActivateTrip,
    EndTrip,
  };
};
