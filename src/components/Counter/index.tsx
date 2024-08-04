import { useCartStore } from '@/store/cartStore';
import { CartItem } from '@/store/cartStore/types';
import { Input } from '@headlessui/react';
import { TiMinus, TiPlus } from 'react-icons/ti';
import { COUNTER_TYPE } from './types';

export const Counter = ({ item }: { item: CartItem }) => {
  const { updateCartItem, deleteCartItem } = useCartStore();
  const { id, quantity } = item;

  const handleCounterClick = (type: COUNTER_TYPE) => {
    if (type === COUNTER_TYPE.INC) {
      updateCartItem(id, quantity + 1);
    }

    if (type === COUNTER_TYPE.DEC) {
      if (quantity === 1) {
        deleteCartItem(id);
      } else {
        updateCartItem(id, quantity - 1);
      }
    }
  };

  return (
    <div className="flex gap-2 border-2 border-white w-max bg-black justify-center items-center p-1">
      <TiMinus onClick={() => handleCounterClick(COUNTER_TYPE.DEC)} />
      <Input
        name="quantity"
        className="bg-transparent w-8 text-center"
        disabled
        value={quantity}
      />
      <TiPlus onClick={() => handleCounterClick(COUNTER_TYPE.INC)} />
    </div>
  );
};
