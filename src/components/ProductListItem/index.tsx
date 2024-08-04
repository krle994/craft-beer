import { generatePath, Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { checkIfImageExists } from '@/utils/imageExists';
import bottle from '@/assets/images/bottle.webp';
import { useMemo } from 'react';
import { AddToCartButton } from '@/components/AddToCartButton';
import { Product } from '@/services/products/types';
import { LoadingScreen } from '../LoadingScreen';

export const ProductListItem = ({ product }: { product: Product }) => {
  const { image, id, name, formattedPrice } = product;

  const img = new Image();

  if (!img.complete) {
    return <LoadingScreen />;
  }

  const productImage = useMemo(() => {
    return checkIfImageExists(image) ? image : bottle;
  }, [image]);

  return (
    <Link
      to={generatePath(ROUTES.PRODUCT_DETAILS, { id })}
      className="flex flex-col flex-1 border-4 border-white p-4 cursor-pointer min-h-96"
      key={`${name}-${id}`}
    >
      <div className="flex justify-between items-center">
        <AddToCartButton cartItem={product} />
        <span className="flex justify-end text-2xl">{formattedPrice}</span>
      </div>
      <div className="flex justify-center items-center flex-1">
        <img
          className="max-h-[400px] h-full w-96 object-contain object-center"
          src={productImage}
          alt={name}
        />
      </div>
      <span className="flex justify-start text-2xl pt-4">{name}</span>
    </Link>
  );
};
