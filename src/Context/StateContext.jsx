import { useState, createContext } from "react";

const AppContext = createContext();

function StateContext({ children }) {
  // Data
  const [hytter, setHytter] = useState({});
  const [selectedHytteId, setSelectedHytteId] = useState(null);
  const [reservationData, setReservationData] = useState({});

  // Modal
  const [success, setSuccess] = useState(false);
  const [modalToggle, setModalToggle] = useState(false);
  const [modalType, setModalType] = useState("HytteDetails");

  return (
    <AppContext.Provider
      value={{
        hytter,
        setHytter,
        success,
        setSuccess,
        modalToggle,
        setModalToggle,
        modalType,
        setModalType,
        selectedHytteId,
        setSelectedHytteId,
        reservationData,
        setReservationData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default StateContext;
