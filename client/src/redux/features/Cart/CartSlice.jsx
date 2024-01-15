import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart")) ?? [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;

      //check if product exists
      const itemExist = state.cartItems.find(
        (item) =>
          item.id === product.id &&
          item.size === product.size &&
          item.color === product.color
      );

      if (itemExist) {
        console.log("Item already exists in the cart");
      } else {
        state.cartItems = [...state.cartItems, product];
        console.log(state.cartItems, "item");
        console.log("Item added to the cart");
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },
    removeFromCart(state, action) {
      const product = action.payload;
      const itemRemove = state.cartItems.filter(
        (item) => item.id !== product.id
      );
      state.cartItems = itemRemove;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;
