import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, productId } = props.item;

  const onAddMoreItemsHandler = () => {
    dispatch(
      cartActions.addProduct({
        productId,
        title,
        price,
      })
    );
  };

  const onRemoveItemHandler = () => {
    dispatch(cartActions.removeProduct(productId));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onRemoveItemHandler}>-</button>
          <button onClick={onAddMoreItemsHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
