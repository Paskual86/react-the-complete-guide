import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./auth-slice";
import counterSlice from "./counter-slice";

// const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authenticationSlice.reducer },
});

// const store = configureStore({
//    reducer: counterSlice.reducer,
// });

export default store;
