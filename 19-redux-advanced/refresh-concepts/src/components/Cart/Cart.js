import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartList = useSelector((state) => state.cart.products);

  const printProducts = (products) => {
    if (products) {
      return products.map((prd) => (
        <CartItem
          key={prd.id}
          item={{
            productId: prd.productId,
            title: prd.title,
            quantity: prd.quantity,
            total: prd.total,
            price: prd.price,
          }}
        />
      ));
    } else {
      return <></>;
    }
  };
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartList && cartList.length > 0 ? (
          printProducts(cartList)
        ) : (
          <h1>Cart is Empty</h1>
        )}
      </ul>
    </Card>
  );
};

export default Cart;
