import React, { useState } from "react";

import "./App.css";
import Demo from "./components/Demo";
import Buttom from "./components/UI/Button/Button";
function App() {
  const [showParagrap, setShowParagrap] = useState(false);
  const onShowParagraphHandler = () => {
    setShowParagrap((prev) => !prev);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={false}></Demo>
      <Button onClick={onShowParagraphHandler}> Show Paragraph</Button>
    </div>
  );
}

export default App;
