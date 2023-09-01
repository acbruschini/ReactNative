import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
  name: "Orders",
  initialState: {
    value: {
      orders: [],
    },
  },
  reducers: {
    setOrders: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setOrders} = ordersSlice.actions;
export default ordersSlice.reducer;
