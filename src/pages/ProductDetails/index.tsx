import { Link, useParams } from 'react-router-dom';
import { useGetProductById } from '@/api/products/useGetProductById';
import { Header } from '@/components/Header';
import { Product } from '@/services/products/types';
import { ROUTES } from '@/constants/routes';
import { checkIfImageExists } from '@/utils/imageExists';
import bottle from '@/assets/bottle.webp';

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    // TODO: redirect to 404

    return null;
  }

  const { data, isLoading, isError, error } = useGetProductById(id);

  console.log(data);

  if (isLoading) return null;

  const { image, name, price, description, abv, style } = data as Product;

  return (
    <div className="h-full w-screen text-white flex items-center justify-center flex-col">
      <Header />
      <main className="flex gap-8 pb-10 max-w-[90%] w-full">
        <Link to={ROUTES.HOME}>Back to Products</Link>
        <div className="flex-1 flex justify-center items-center">
          <img
            className="max-h-[350px] h-full w-96 object-contain object-center"
            src={checkIfImageExists(image) ? image : bottle}
            alt={name}
          />
        </div>
        <div className="flex flex-1 flex-col">
          <h1>{name}</h1>
          <p>{description}</p>
          <p>{style}</p>
          <p>{price}</p>
          <p>{abv}</p>
        </div>
      </main>
    </div>
  );
}
