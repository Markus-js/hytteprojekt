import React, { useState, useEffect } from "react";
import { fetch2api } from "../../helpers/helper";
import classes from "./HytteModal.module.css";

export default function HytteModal({
  hytteId,
  handleToggle,
  setToggle,
  setFormId,
  setForm,
  setSliderToggle,
}) {
  // Holds the data from fetch
  const [hytte, setHytte] = useState("");
  const priceFixed = parseInt(hytte.price).toFixed(0);

  // helpers/helper
  // Reusable fetch component
  /*
    Takes the hytteId from App.js Parrent, and fetches the id of corresponding item with the same id,
  */
  const getHytte = async () => {
    const url = `https://api.mediehuset.net/hytteshop/${hytteId}`;
    const result = await fetch2api(url);
    setHytte(result?.item);
  };

  // Render every time [Button Læs mere] is clicked
  // returns the id of the specific id of fetch item
  // Then triggers render of single component
  useEffect(() => {
    getHytte();
    console.log(hytteId);
  }, [hytteId]);

  function handleReservering(id) {
    setFormId(id);
    setToggle(false);
    setForm(true);
  }

  function handleExit() {

    // App.js Parrent
    // Toggle modal should be should be shown
    setToggle(false);
  }

  function handleSlider(boolean) {
    setSliderToggle(boolean);
  }

  return (
    <div>
      {/*
        App.js Parrent
        if handleToggle, then show jsx modal.
        Also handleToggle sets css classes true=display:flex, false=display:none
      */}
      {handleToggle && (
        <div className={handleToggle ? true : false}>
          <div className="modalContainer">
            <div onClick={() => handleExit()} className="header">
              <h3>Du kigger nu på hus nr. {hytte.number}</h3>
            </div>
            <div className="hytte-modal-content">
              <div>
                <h3>Hus nr. {hytte.number}</h3>

                <p>
                  <b>Beskrivelse:</b>
                </p>
                <p>{hytte.description}</p>
                {/* dummy text */}
                <p>
                  Beskrivelse: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Vitae congue eu consequat ac felis done
                  et odio. Sed viverra tellus in hac habitass Vitae turpis massa
                  sed elementum tempus egestas sed. Tincidunt present semper
                  feugiat nibh sed pulvinar proin gravida. Huset er 80% færdigt.
                  Der mangler at blive lavet folgende: Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Vitae congue eu
                  consequat ac felis donec et odio.
                </p>

                <h3 className="price">
                  {/* Fix coma toFixed() */}
                  Pris: <span className="amount">{priceFixed}kr</span>
                </h3>
              </div>
              <div className="image-box">
                <figure>
                  <img
                    src={hytte.image}
                    alt={hytte.title}
                    onClick={() => handleSlider(true)}
                  />
                </figure>
                {/* 
                  handleReservering returns the id of the current selected item. 
                  Then it is returned to Parrent App.js useStates:
                    setFormId(id) = handleReservering id of current item => Render corresponding form component
                    setToggle(false) = Closes the current modal
                    setForm(true) = Opens the form modal with the setFormId
                */}
                <button
                  className="btn"
                  onClick={() => {
                    handleReservering(hytte.id);
                    handleSlider(false);
                  }}
                >
                  RESERVER NU
                </button>
              </div>
            </div>
          </div>
          {/* Css overlay is an div that is behind the modal, which closes it when clicked outside the modal for ui experience */}
          <div
            onClick={() => {
              handleExit();
              handleSlider(false);
            }}
            className="overlay"
          ></div>
        </div>
      )}
    </div>
  );
}
