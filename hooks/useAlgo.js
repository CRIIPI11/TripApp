import axios from "axios";
import { useState } from "react";
import { useLocationStore } from "./useLocationStore";

export const useAlgo = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const { location } = useLocationStore();

  const callPlaces = async (destLat, destLng, categories) => {
    console.log("Algorithm Use");
    const places = await axios.get(`${process.env.LOCAL_API_URL}places/plan`, {
      params: {
        originLatitude: location?.location?.lat,
        originLongitude: location?.location?.lng,
        destLatitude: destLat,
        destLongitude: destLng,
        categories: categories,
      },
    });

    if (places.data.status === "success") {
      setPlaces(places.data.data);
      setLoading(false);
    } else {
      console.log(`Error: ${data.data}`);
    }
  };

  const getPlaces = async (destLat, destLng, categories) => {
    setLoading(true);
    try {
      await callPlaces(destLat, destLng, categories);
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
