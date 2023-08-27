import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    value: {
      user: "",
      updatedAt: "",
      total: null,
      items: [],
    },
  },
  reducers: {
    addItem: (state, action) => {
      const productExists = state.value.items.some(
        (item) => item.id == action.payload.id
      );
      if (productExists) {
        //recorro el array y cuando matchea el id suma uno a cantidad
        state.value.items = state.value.items.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity += action.payload.quantity;
            return item;
          }
          return item;
        });
      } else {
        state.value.items.push(action.payload);
      }

      state.value.total = state.value.items.reduce(
        (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
        0
      );

      state.value.updatedAt = new Date().toLocaleString();
    },
    removeItem: (state, action) => {
      const productExists = state.value.items.some(
        (item) => item.id == action.payload
      );
      if (productExists) {
        state.value.items = state.value.items.map((item) => {
          if (item.id != action.payload) {
            return item;
          } else if (item.quantity >= 2) {
            item.quantity--;
            return item;
          }
        });
      }

      state.value.items = state.value.items.filter(item => item != undefined)

    },
    setUserLocalId: (state, action) => {
      console.log("PAYLOAD")
      console.log(action.payload)
      state.value.user = action.payload
    },
    emptyCart: (state, action) => {
      state.value.items = []
    },
    cartLogOut: (state, action) => {
      state.value = {
        user: "",
        updatedAt: "",
        total: null,
        items: [],
      }
    }
  },
});

export const { addItem, removeItem, setUserLocalId, emptyCart, cartLogOut } = cartSlice.actions;
export default cartSlice.reducer;
