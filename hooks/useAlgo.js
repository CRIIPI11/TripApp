import axios from "axios";
import { useState } from "react";
import { useLocationStore } from "./useLocationStore";

export const usePlaces = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const { location } = useLocationStore();

  const callPlaces = async (destLat, destLng) => {
    console.log("Algorithm Use");
    const places = await axios.get(`${process.env.LOCAL_API_URL}places/plan`, {
      params: {
        originLatitude: location?.location?.lat,
        originLongitude: location?.location?.lng,
        destLatitude: destLat,
        destLongitude: destLng,
      },
    });

    if (places.data.status === "success") {
      setPlaces(places.data.data);
      setLoading(false);
    }
  };

  const getPlaces = async (destLat, destLng) => {
    setLoading(true);
    try {
      await callPlaces(destLat, destLng);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    //properties
    places,
    loading,
    //methods
    getPlaces,
  };
};
