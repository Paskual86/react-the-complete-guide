import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      title: "Pan",
      description: "Pan nuestro de cada dia",
      price: 5.6,
    },
    {
      id: 2,
      title: "Ferrari",
      description: "It is a ferray",
      price: 300000,
    },
    {
      id: 3,
      title: "Computer",
      description: "It is a Computer",
      price: 2000,
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export const producActions = productSlice.actions;
export default productSlice;
