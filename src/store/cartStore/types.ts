import { Product } from "@/services/products/types";

export type CartItem = Omit<Product, "rating" | "description" | "abv" | "style"> & {
  quantity: number;
};

export type CartState = {
  items: CartItem[];
  addToCart: (newCartItem: CartItem) => void;
  updateCartItem: (id: number, quantity: number) => void;
  deleteCartItem: (id: number) => void;
  resetCart: () => void;
}