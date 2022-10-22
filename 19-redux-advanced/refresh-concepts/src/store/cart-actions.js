import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
export const fetchCartData = () => {
  return async (dispatchFnc) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-cart-10a5c-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw Error("There was an error fetching Data");
      }
      return response.json();
    };

    try {
      const cartData = await fetchData();
      if (cartData) {
        dispatchFnc(
          cartActions.replaceData({
            products: cartData.products || [],
            totalQuantiy: cartData.totalQuantiy,
          })
        );
      }
    } catch (error) {
      dispatchFnc(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    }
  };
};

export const sendCartData = (cartData) => {
  return async (dispatchFunction) => {
    dispatchFunction(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!!!",
      })
    );

    const executeRequest = async () => {
      const response = await fetch(
        "https://redux-cart-10a5c-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            products: cartData,
            totalQuantiy: cartData.length,
          }),
        }
      );

      if (!response.ok) {
        throw Error("There was an error executing request");
      }
    };

    try {
      await executeRequest();
      dispatchFunction(
        uiActions.showNotification({
          status: "success",
          title: "Sucess!!!",
          message: "Sucessfully",
        })
      );
    } catch (error) {
      dispatchFunction(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    }
  };
};
