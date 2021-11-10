import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../src/Context/Context";
import HytteCard from "./components/HytteCard";
import { Modal } from "./components/Modal";
import { AiFillQuestionCircle } from "react-icons/ai";

// FIX PÅ SKOLE MED FETCHTOAPI
import fetch2api from "./helpers/helper";

export default function Home() {
  const { hytter, setHytter, setModalToggle, setModalType } =
    useContext(AppContext);
  const [rerender, setRerender] = useState(false);

  console.log(hytter);

  // // Fetch API
  // const getHytteListe = async () => {
  //   const url = "https://api.mediehuset.net/hytteshop";
  //   const result = await fetch2api(url);
  //   setHytter(result?.items);
  // };

  // Lifecycle management
  useEffect(() => {
    //getHytteListe();
  }, []);

  // Show Popup first render & when rerender
  useEffect(() => {
    setModalToggle(true);
    setModalType("ModalChildPopup");
  }, [rerender]);

  return hytter ? (
    <section className="app_container">
      <p className="intro_txt">
        Her på siden kan du orientere dig om, hwilke udhuse/skure/byggeprojekter
        der er sat til salg.
      </p>
      <div className="grid-container">
        {hytter.items.map((hytte) => {
          // If hytte is reserved, return
          if (!hytte.is_reserved) {
            return <HytteCard key={hytte.id} hytte={hytte} />;
          }
        })}
      </div>
      <Modal />
      {/* Toggle Popup */}
      <AiFillQuestionCircle
        className="question_circle"
        // rerender useEffect to toggle Popup again
        onClick={() => setRerender((prevState) => !prevState)}
      />
    </section>
  ) : null;
}
