import axios from "axios";
import { useState } from "react";
import { useLocationStore } from "./useLocationStore";
import { useSelector } from "react-redux";

export const usePlaces = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const { location } = useLocationStore();
  const filter = useSelector((state) => state.filter.filter);

  
  const tags = ["museums", "art gallery","Landmark","Sculpture","restaurant","park","Historical Landmark"];
  const randomIndex = Math.floor(Math.random() * tags.length);

  const callPlaces = async (type, par) => {
    if (type === "popular") {
      const places = await axios.get(
        `${process.env.server_url}/places/popular`
      );
      if (places.data.status === "success") {
        setPlaces(places.data.data);
        setLoading(false);
      }
    }

    // if (type === "location") {
    //   const places = await axios.get(
    //     `${process.env.server_url}/places/location`,
    //     {
    //       params: {
    //         latitude: location?.location?.lat,
    //         longitude: location?.location?.long,
    //         filter: filter,
    //       },
    //     }
    //   );
    //   if (places.data.status === "success") {
    //     setPlaces(places.data.data);
    //     setLoading(false);
    //   }
    // }

    // if (type === "recommended") {
    //   const places = await axios.get(
    //     `${process.env.server_url}/places/location`,
    //     {
    //       params: {
    //         latitude: par.lat,
    //         longitude: par.lng,
    //         filter: tags[randomIndex]
    //       },
    //     }
    //   );
    //   if (places.data.status === "success") {
    //     setPlaces(places.data.data);
    //     setLoading(false);
    //   }
    // }

    // if (type === "search") {
    //   const places = await axios.get(
    //     `${process.env.server_url}/places/search`,
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
