import React, { useState } from "react";
import StartPage from "./components/StartPage.js";

const App = () => {
  return (
    // diese <> </> Umschließung funktioniert in diesem Projekt als Ersatz für einen Wrapper oder <React.Fragment/>
    <>
      {/* <Test/> */}
      <StartPage />
      {/* <Startseite /> */}
      {/* <Verbindung />; */}
    </>
  );
};

export default App;
