import { createContext, useState, useEffect } from "react";
import data from "../data.json";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // Data
  const [hytter, setHytter] = useState(data);
  const [selectedHytteId, setSelectedHytteId] = useState(null);
  const [reservationData, setReservationData] = useState({});

  // Modal
  const [success, setSuccess] = useState(false);
  const [modalToggle, setModalToggle] = useState(false);
  const [modalType, setModalType] = useState("HytteDetails");

  useEffect(() => {
    // settingLoginData();
    console.log(success);
  }, [success]);

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
};

export { AppContext, AppContextProvider };
