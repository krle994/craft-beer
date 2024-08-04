import { useCartStore } from '@/store/cartStore';
import { useSalesStore } from '@/store/salesStore';
import { Button, useClose } from '@headlessui/react';
import toast from 'react-hot-toast';

export const CartModalActions = () => {
  const { items: cartItems, resetCart } = useCartStore();
  const { addSalesItems } = useSalesStore();

  const closeCartModal = useClose();

  const handleClearCart = () => {
    resetCart();
    toast.success('Cart cleared successfully');
  };

  const handleBuyItems = () => {
    addSalesItems(cartItems);
    resetCart();
    closeCartModal();
    toast.success('Products bought successfully!');
  };

  return (
    <div className="flex pt-6 justify-end gap-4">
      <Button onClick={handleClearCart} className="text-2xl  px-2 py-1">
        Clear cart
      </Button>
      <Button
        onClick={handleBuyItems}
        className="text-2xl border-4 border-white px-2 py-1"
      >
        Buy items
      </Button>
    </div>
  );
};
