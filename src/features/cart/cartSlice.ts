import { createSelector, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const addedItem = action.payload;
      const existingItem = state.items.find((item) => item.id === addedItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.items = [...state.items, addedItem];
      }
    },
    removeFromCart: (state, action) => {
      const itemToRemove = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === itemToRemove.id
      );
      if (!existingItem) return;
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.items = state.items.filter((item) => item.id !== itemToRemove.id);
      }
    },
  },
});

export const selectItems = (state) => state.cart.items;
export const selectTotalPrice = (state) =>
  state.cart.items.reduce((total, item) => total + item.totalPrice, 0);
export const selectTotalItems = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectCartItems = createSelector(
  selectItems,
  selectTotalItems,
  selectTotalPrice
);

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
