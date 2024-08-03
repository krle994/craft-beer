import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, CartState } from "./types";

export const handleAddToCartStore = (
  state: CartState,
  newCartItem: CartItem
) => {
  return {
    items: [...state.items, newCartItem].reduce(
      (accumulator: CartItem[], currentItem: CartItem) => {
        const existingItem = accumulator.find(
          item => item.id === currentItem.id
        );

        if (existingItem) {
          existingItem.quantity += currentItem.quantity;
        } else {
          accumulator.push(currentItem);
        }

        return accumulator;
      },
      []
    ),
  };
};

export const handleUpdateCartStoreItem = (
  state: CartState,
  id: number,
  quantity: number
) => {
  return {
    items: state.items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: quantity,
        };
      }
      return item;
    }),
  };
};

export const handleDeleteCartStoreItem = (state: CartState, id: number) => {
  return {
    items: state.items.filter(item => item.id !== id),
  };
};


export const useCartStore = create<CartState>()(
  persist(
    set => ({
      items: [],

      addToCart: (newCartItem: CartItem) => {
        set((state: CartState) => handleAddToCartStore(state, newCartItem));
      },

      updateCartItem: (id: number, quantity: number) => {
        set((state: CartState) =>
          handleUpdateCartStoreItem(state, id, quantity)
        );
      },

      deleteCartItem: (id: number) => {
        set((state: CartState) => handleDeleteCartStoreItem(state, id));
      },


      resetCart: () => set(() => ({ items: [] })),
    }),
    { name: "cart" }
  )
);
