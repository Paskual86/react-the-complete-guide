import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Modal from "./components/UI/Modal";
import Backdrop from "./components/UI/Backdrop";
import { cartActions } from "./store/cart-slice";

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);
  const modalHandler = () => {
    dispatch(cartActions.showModalCart(false));
  };
  return (
    <Layout>
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
