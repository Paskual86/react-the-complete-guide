import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], showCart: false };

function arrayMax(arr) {
  if (arr && arr.length > 0) {
    return arr.reduce(function (p, v) {
      return p.id > v.id ? p.id : v.id;
    });
  } else {
    return 0;
  }
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find(
        (item) => item.productId === newItem.productId
      );
      if (!existingItem) {
        state.products.push({
          id: arrayMax(state.products) + 1,
          productId: newItem.productId,
          title: newItem.title,
          quantity: 1,
          total: newItem.price,
          price: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.total = existingItem.quantity * newItem.price;
      }
    },
    removeProduct(state, action) {
      if (state.products.length > 0) {
        let productIndex = state.products.findIndex(
          (f) => f.id === action.payload
        );
        if (productIndex) {
          state.products.splice(productIndex, 1);
        }
      }
    },
    showModalCart(state, action) {
      state.showCart = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
