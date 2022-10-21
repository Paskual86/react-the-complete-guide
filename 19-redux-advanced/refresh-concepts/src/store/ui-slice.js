import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { notification: null },
  reducers: {
    showNotification(state, action) {
      if (action.payload !== null) {
        state.notification = {
          status: action.payload.status,
          title: action.payload.title,
          message: action.payload.message,
        };
      } else {
        state.notification = null;
      }
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
