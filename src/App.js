import React, { useState, useEffect } from "react";
import axios from 'axios';

import "./global.scss";
import Popup from "./components/popup/Popup";
import HytteList from "./components/hytte/HytteList";
import HytteModal from "./components/hytteModal/HytteModal";
import ReservationModal from "./components/reservationModal/ReservationModal";
import ImageSlider from "./components/carousel/ImageSlider";
import Succes from "./components/success/Success";
// Get data from current
import { SliderData } from "./components/carousel/SliderData";

import { fetch2api } from "./helpers/helper";

function App() {
  const [hytteListe, setHytteListe] = useState(null);
  const [handleToggle, setHandleToggle] = useState(true);
  const [handleForm, setHandleForm] = useState(true);
  const [hytteId, setHytteId] = useState(null);
  const [formId, setFormId] = useState(null);
  const [sliderToggle, setSliderToggle] = useState(false);
  const [successToggle, setSuccesToggle] = useState(null);
  const [handlePopup, setHandlePopup] = useState(true);
   
  const updataData = () => {

    const data = {
      "id": "4",
      "type": "Hytte",
      "number": "45",
      "title": "Træhytte - isoleret",
      "price": "6500.00",
      "image": "https://api.mediehuset.net/images/hytteshop/hytte1.jpg",
      "num_reservations": "0"
  }

    axios.post("https://api.mediehuset.net/hytteshop", data)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err)
  })
  }

  const getHytteListe = async () => {
    const url = "https://api.mediehuset.net/hytteshop";
    const result = await fetch2api(url);
    setHytteListe(result?.items);
  };

  useEffect(() => {
    updataData();
    getHytteListe();
  }, []);

  // handleClick = context
  function handleClick(id) {
    setHytteId(id);
    setHandleToggle(true);
  }

  return (
    <div className="container">
      {/* Validate if HytteList */}
      {/* // handleClick = context */}

      {hytteListe && (
        <HytteList
          handleClick={handleClick}
          data={hytteListe}
          hytteListe={hytteListe}
          setSliderToggle={setSliderToggle}
        />
      )}

      {/* Modal */}

      {hytteId && (
        <HytteModal
          hytteId={hytteId}
          handleToggle={handleToggle}
          setToggle={setHandleToggle}
          setFormId={setFormId}
          setForm={setHandleForm}
          setSliderToggle={setSliderToggle}
        />
      )}

      {/* Form */}

      {formId && (
        <ReservationModal
          formId={formId}
          handleForm={handleForm}
          setForm={setHandleForm}
          setSliderToggle={setSliderToggle}
          handleSuccess={setSuccesToggle}
        />
      )}

      {/* Carousel 
            Remember Validation
        */}
      {sliderToggle && <ImageSlider slides={SliderData} setSliderToggle={setSliderToggle} setToggle={setHandleToggle} />}
   
      {handlePopup && (
          <Popup handlePopup={handlePopup} setPopup={setHandlePopup} />
        )}
         {/* 
         Succes component
          Show if sendForm was successful  
        */}
        {successToggle && (
          <Succes setSuccesToggle={setSuccesToggle} setSliderToggle={setSliderToggle} />
        )}
   
    </div>
  );
}

export default App;
