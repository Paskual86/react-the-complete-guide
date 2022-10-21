import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Modal from "./components/UI/Modal";
import Backdrop from "./components/UI/Backdrop";
import { cartActions } from "./store/cart-slice";
import { useEffect } from "react";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.cart.products);
  const notification = useSelector((state) => state.ui.notification);
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!!!",
        })
      );

      const response = await fetch(
        "https://redux-cart-10a5c-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw Error("There was an error executing request");
      }
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Sucess!!!",
          message: "Sucessfully",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    });
  }, [cart, dispatch]);

  const modalHandler = () => {
    dispatch(cartActions.showModalCart(false));
  };

  return (
    <Layout>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        ></Notification>
      )}
      {showCart && <Backdrop onClick={modalHandler} />}
      {showCart && (
        <Modal text="Are you sure?" onOk={modalHandler}>
          <Cart />
        </Modal>
      )}
      <Products />
    </Layout>
  );
}

export default App;
