import React, { useState, useContext, useEffect } from "react";
import { AppContextProvider } from "./Context/Context";
import Home from "./Home";

import "./styles/globals.scss";

function App() {
  return (
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  );
}

export default App;
