import { useContext } from "react";

import { AppContext } from "../Context/Context";
// Components
import ModalChildDetails from "./ModalChildDetails";
import ModalChildReservation from "./ModalChildReservation";
// Style
import Style from "./modal.module.scss";
import ModalChildPopup from "./ModalChildPopup";

export const Modal = () => {
  const { setSuccess, modalToggle, setModalToggle, modalType } =
    useContext(AppContext);

  function handleExit() {
    // Toggle modal
    setSuccess(false);
    setModalToggle(false);
  }

  return (
    <>
      {modalToggle && modalType !== "" ? (
        <section className={Style.modal_container}>
          <span
            className={Style.close}
            onClick={() => {
              handleExit();
            }}
          >
            &#10005;
          </span>
          {/* Popup */}
          {modalType === "ModalChildPopup" ? <ModalChildPopup /> : null}
          {/* Details & Reservation */}
          {modalType === "ModalChildDetails" ? <ModalChildDetails /> : null}
          {modalType === "ModalChildReservation" ? (
            <ModalChildReservation />
          ) : null}
        </section>
      ) : null}

      {/* Modal BG */}
      {modalToggle ? (
        <div
          className={Style.overlay}
          onClick={() => {
            handleExit();
          }}
        ></div>
      ) : null}
    </>
  );
};
