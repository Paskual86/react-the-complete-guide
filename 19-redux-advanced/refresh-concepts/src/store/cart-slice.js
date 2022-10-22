import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  showCart: false,
  totalQuantiy: 0,
  changed: false,
};

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
    replaceData(state, action) {
      state.totalQuantiy = action.payload.totalQuantiy;
      state.products = action.payload.products;
    },
    addProduct(state, action) {
      state.changed = true;
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
      state.totalQuantiy++;
    },
    removeProduct(state, action) {
      state.changed = true;
      if (state.products.length > 0) {
        const existingItem = state.products.findIndex(
          (item) => item.productId === action.payload
        );

        if (existingItem >= 0) {
          if (state.products[existingItem].quantity > 1) {
            state.products[existingItem].quantity--;
            state.products[existingItem].total -=
              state.products[existingItem].price;
          } else {
            state.products.splice(existingItem, 1);
          }
        }
        state.totalQuantiy--;
      } else {
        state.totalQuantiy = 0;
      }
    },
    showModalCart(state, action) {
      state.showCart = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
