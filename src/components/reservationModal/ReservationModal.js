import React, { useState, useEffect } from "react";
import Form from "../form/Form";
import classes from "./ReservationModal.module.css";
import { fetch2api } from "../../helpers/helper";

export default function ReservationModal({ formId, handleForm, setForm, setSliderToggle }) {
  const [formData, setFormData] = useState("");
  const priceFixed = parseInt(formData.price).toFixed(0);

  const getForm = async () => {
    const url = `https://api.mediehuset.net/hytteshop/${formId}`;
    const result = await fetch2api(url);
    setFormData(result?.item);
  };

  // Render every time [Button Læs mere] is clicked
  // returns the id of the specific id of fetch item
  // Then triggers render of single component
  useEffect(() => {
    getForm();
  }, [formId]);

  function handleExit() {
    setForm(false);
  }
  function handleSlider(boolean) {
    setSliderToggle(boolean);
  }

  return (
    <div>
      {handleForm && (
        <div className={handleForm ? true : false}>
          <div className="modalContainer">
            <div onClick={() => handleExit()} className="header">
              <h3>Du er nu ved at reservere et udhus/skur/byggeprojekt</h3>
            </div>
            <div>
              <p>For at reservere et hus, skal du udfylde felterne herunder</p>
              <p>
                Når du har udfyldt nedenstäende felter er huset reserveret til
                dig i 24 timer. Inden for reservationstiden skal du betale
                ellers sattes huset til salg igen.
              </p>
              {/* Refracture Form to own component */}
              <Form formData={formData} />
              <p>
                Du kan betale via MobilePay nummer 179833. När vi har modtaget
                din betaling sender vi en mail med bekræeftelse og beder dig om
                <br />
                <br />
                at hente huset. Huse skal hentes senest 14 dage efter betaling
                og indenfor skolens abningstid mellem kl. 8 - 16.
              </p>
            </div>
          </div>
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
