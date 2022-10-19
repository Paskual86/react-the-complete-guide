import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const onClickCartHandler = () => {
    dispatch(cartActions.showModalCart(true));
  };
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={onClickCartHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
