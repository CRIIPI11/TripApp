import axios from "axios";
import { useState } from "react";
import { useLocationStore } from "./useLocationStore";
import { useSelector } from "react-redux";

export const usePlaces = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const { location } = useLocationStore();
  const filter = useSelector((state) => state.filter.filter);

  const tags = [
    "museums",
    "art gallery",
    "Landmark",
    "Sculpture",
    "restaurant",
    "park",
    "Historical Landmark",
  ];
  const randomIndex = Math.floor(Math.random() * tags.length);

  const callPlaces = async (type, par) => {
    if (type === "popular") {
      const places = await axios.get(
        `${process.env.LOCAL_API_URL}places/popular`
      );
      if (places.data.status === "success") {
        setPlaces(places.data.data);
        setLoading(false);
      }
    }

    // if (type === "location") {
    //   console.log("location", location, filter);
    //   const places = await axios.get(
    //     `${process.env.LOCAL_API_URL}places/location`,
    //     {
    //       params: {
    //         latitude: location?.location?.lat,
    //         longitude: location?.location?.lng,
    //         filter: filter,
    //       },
    //     }
    //   );
    //   if (places.data.status === "success") {
    //     setPlaces(places.data.data);
    //     setLoading(false);
    //   }
    // }
    
    if (type === "recommended") {
      const places = await axios.get(
        `${process.env.LOCAL_API_URL}places/recommended`,
        {
          params: {
            latitude: par.lat,
            longitude: par.lng,
          },
        }
      );
      if (places.data.status === "success") {
        setPlaces(places.data.data);
        setLoading(false);
      }
    }

    // if (type === "search") {
    //   const places = await axios.get(
    //     `${process.env.LOCAL_API_URL}places/search`,
    //     {
    //       params: {
    //         text: par,
    //       },
    //     }
    //   );
    //   if (places.data.status === "success") {
    //     setPlaces(places.data.data);
    //     setLoading(false);
    //   }
    // }
  };

  const getPlaces = async (type, par) => {
    setLoading(true);
    try {
      await callPlaces(type, par);
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
