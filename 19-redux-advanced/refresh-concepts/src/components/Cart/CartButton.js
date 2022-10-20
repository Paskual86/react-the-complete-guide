import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const totalItemsCount = useSelector((state) => state.cart.totalQuantiy);
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItemsCount}</span>
    </button>
  );
};

export default CartButton;
