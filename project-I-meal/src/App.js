import React from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
