import axios from "axios";
import { useState } from "react";

export const usePlaces = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  const callPLaces = async (type) => {
    if (type === "popular") {
      // const places = await axios.get(
      //   `${process.env.server_url}/places/popular`
      // );

      if (places.data.status === "success") {
        setPlaces(places.data.data);
        setLoading(false);
      }
    }
  };

  const getPLaces = async (type) => {
    setLoading(true);
    try {
      await callPLaces(type);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    //properties
    places,
    loading,
    //methods
    getPLaces,
  };
};
