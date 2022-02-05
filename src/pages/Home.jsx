import React, { useEffect, useState } from "react";
import Header from "@components/Header";
import Avatar from "@components/Avatar";
import useGetData from "@hooks/useGetData";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  const [data, setData] = useState([]);
  const dataJson = useGetData("https://api.coinbase.com/v2/prices/BTC-USD/buy");

  useEffect(() => {
    //do something
  }, []);

  return (
    <div>
      {/* <Header /> */}
      <div className="flex flex-center flex-middle">
        <Avatar />
      </div>
      <div className="padding40">
        <h1 className="text-center color-white font40">¡ Welcome !</h1>

        <p className="text-center color-white font1-3rem">
          Thanks for using this React Boilerplate built from scratch.
          <br /> Feel free to share me your questions/opinions about the
          structure, packages used or anything.
        </p>

        <p className="text-center color-white font1-3rem">
          ¿Do you Have Frontend questions?
        </p>
        <div className="flex flex-middle flex-center">
          <a
            href="https://api.whatsapp.com/send/?phone=5213211007403&text=Hola+Mario%21%2C+I+have+frontend+questions!&app_absent=0"
            className="btn color-white text-uppercase back-green flex flex-middle flex-center"
          >
            <span className="margin-right10">Let's Connect!</span>
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
