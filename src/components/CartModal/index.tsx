import { useMemo } from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

import { useCartStore } from '@/store/cartStore';

import { TbShoppingCart } from 'react-icons/tb';
import { EmptyCartState } from './components/EmptyCartState';
import { CartListItem } from './components/CartListItem';
import { CartModalActions } from './components/CartModalActions';

export const CartModal = () => {
  const { items: cartItems } = useCartStore();

  const renderCartItems = useMemo(() => {
    if (!cartItems.length) {
      return <EmptyCartState />;
    }

    return cartItems.map(
      ({ image, price, formattedPrice, name, quantity, id }) => (
        <CartListItem
          key={id}
          image={image}
          price={price}
          formattedPrice={formattedPrice}
          name={name}
          quantity={quantity}
          id={id}
        />
      )
    );
  }, [cartItems]);

  return (
    <Popover className="relative">
      <PopoverButton>
        <TbShoppingCart className="text-3xl" />
      </PopoverButton>
      <PopoverPanel
        anchor="bottom start"
        className="flex flex-col bg-black border-2 text-white font-bebas p-4 w-max max-w-[500px]"
      >
        {renderCartItems}

        <CartModalActions />
      </PopoverPanel>
    </Popover>
  );
};
