import { Product } from '@/services/products/types';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@headlessui/react';
import { toast } from 'react-hot-toast';

export const AddToCartButton = ({
  cartItem,
  classNames = '',
}: {
  cartItem: Product;
  classNames?: string;
}) => {
  const { addToCart } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { description, abv, style, ...rest } = cartItem;
    addToCart({ ...rest, quantity: 1 });
    toast.success('Product added to cart!');
  };

  return (
    <Button
      className={`text-2xl border-4 border-white bg-white text-black px-2 data-[hover]:bg-black data-[hover]:text-white transition-all duration-300 ${classNames}`}
      onClick={handleAddToCart}
    >
      Add to cart
    </Button>
  );
};
