import { useState, useEffect } from "react";
import axios from "axios";

const useGetData = (API) => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setData(response);

    // return () => {
    //     // cleanup
    // };
  }, []);

  return data;
};

export default useGetData;
