import { Product } from "@/services/products/types";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@headlessui/react";

export const AddToCartButton = ({ cartItem }: { cartItem: Product }) => {
  const { addToCart } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { description, abv, rating, style, ...rest } = cartItem;
    addToCart({ ...rest, quantity: 1 });
  };

  return (
    <Button
      className="text-2xl border-4 border-white px-2 data-[hover]:bg-white data-[hover]:text-black transition-all duration-300"
      onClick={handleAddToCart}
    >
      Add to cart
    </Button>
  );
};
