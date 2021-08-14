import React, { useState, useEffect } from "react";
import Form from "../form/Form";
import { fetch2api } from "../../helpers/helper";

export default function ReservationModal({
  formId,
  handleForm,
  setForm,
  setSliderToggle,
  handleSuccess,
}) {
  const [formData, setFormData] = useState("");
  //const priceFixed = parseInt(formData.price).toFixed(0);

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
  }, []);

  function handleExit() {
    setForm(false);
  }
  function handleSlider(boolean) {
    setSliderToggle(boolean);
  }

  return (
    <div>
      {handleForm && (
        <div>
          <div className="modalContainer">
            <div className="close" onClick={() => handleExit()}>
              <span>&#10005;</span>
            </div>
            <div onClick={() => handleExit()} className="header">
              <div>
                <h3>Du er nu ved at reservere et udhus/skur/byggeprojekt</h3>
              </div>
              <div className="close--small" onClick={() => handleExit()}>
                <span>&#10005;</span>
              </div>
            </div>
            <div className="reservation-modal-content">
              <p>For at reservere et hus, skal du udfylde felterne herunder</p>
              <p>
                Når du har udfyldt nedenstäende felter er huset reserveret til
                dig i 24 timer. Inden for reservationstiden skal du betale
                ellers sattes huset til salg igen.
              </p>
              {/* Refracture Form to own component */}
              <Form
                formData={formData}
                handleSuccess={handleSuccess}
                setForm={setForm}
              />
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
