import { useCartStore } from '@/store/cartStore';
import { useSalesStore } from '@/store/salesStore';
import { Button, useClose } from '@headlessui/react';

export const CartModalActions = () => {
  const { items: cartItems, resetCart } = useCartStore();
  const { addSalesItems } = useSalesStore();

  const closeCartModal = useClose();

  const handleClearCart = () => {
    resetCart();
  };

  const handleBuyItems = () => {
    addSalesItems(cartItems);
    resetCart();
    closeCartModal();
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
