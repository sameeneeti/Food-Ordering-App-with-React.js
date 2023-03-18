import { Fragment } from "react";

import mealsImg from "../../asset/meals.jpg";
import classes from "./Headers.module.css"; 
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} /> 
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="mealimage" />
      </div>
    </Fragment>
  );
};

export default Header;
