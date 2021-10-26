import React from "react";

// Aca vemos un ejemplo de como importar una imagen dentro de la pagina
import imgMeal from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Mels</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={imgMeal} alt="some dummy description"></img>
      </div>{" "}
      {/* This will contain the image */}
    </>
  );
};

export default Header;
