import { Counter } from '@/components/Counter';
import { CartItem } from '@/store/cartStore/types';
import { currencyFormatter } from '@/utils/currencyFormatter';
import { checkIfImageExists } from '@/utils/imageExists';
import { Button } from '@headlessui/react';
import { useCallback, useMemo } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import bottle from '@/assets/images/bottle.webp';
import { useCartStore } from '@/store/cartStore';

export const CartListItem = (item: CartItem) => {
  const { deleteCartItem } = useCartStore();

  const { image, name, price, formattedPrice, id, quantity } = item;

  const productImage = useMemo(() => {
    return checkIfImageExists(image) ? image : bottle;
  }, [image]);

  const handleRemoveFromCart = useCallback(() => {
    deleteCartItem(id);
  }, [id]);

  return (
    <div className="flex gap-4 w-full [&:not(:last-child)]:border-b-4 border-white no-scrollbar">
      <div className="flex flex-1 justify-center items-center">
        <img src={productImage} className="object-contain" />
      </div>

      <div className="flex flex-[2] justify-between gap-8 py-6">
        <div className="flex flex-col gap-4 justify-between">
          <div className="flex flex-col">
            <span className="text-2xl">{name}</span>
            <span className="text-gray-400">{formattedPrice}</span>
          </div>
          <Counter item={item} />
        </div>

        <div className="flex flex-col justify-between">
          <span className="text-2xl">
            {currencyFormatter(price * quantity)}
          </span>

          <Button
            className="flex items-center justify-end"
            onClick={handleRemoveFromCart}
          >
            <FiTrash2 className="text-2xl" />
          </Button>
        </div>
      </div>
    </div>
  );
};
