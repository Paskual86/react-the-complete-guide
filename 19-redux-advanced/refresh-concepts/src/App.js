import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Modal from "./components/UI/Modal";
import Backdrop from "./components/UI/Backdrop";
import { cartActions } from "./store/cart-slice";
import { fetchCartData, sendCartData } from "./store/cart-actions";
import { useEffect } from "react";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.cart.products);
  const notification = useSelector((state) => state.ui.notification);
  const dataWasChanged = useSelector((state) => state.cart.changed);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (dataWasChanged) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch, dataWasChanged]);

  useEffect(() => {
    if (isInitial) {
      return;
    }

    if (notification !== null) {
      setTimeout(() => {
        dispatch(uiActions.showNotification(null));
      }, 2000);
    }
  }, [notification, dispatch]);
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
