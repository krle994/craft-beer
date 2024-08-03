import { Header } from '@/components/Header';
import { useGetProducts } from '@/api/products/useGetProducts';
import { generatePath, Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { checkIfImageExists } from '@/utils/imageExists';
import bottle from '@/assets/bottle.webp';

export function Home() {
  const { data, isLoading, isError, error } = useGetProducts();

  console.log(data);

  if (isLoading) {
    return null;
  }

  return (
    <div className="h-full w-screen text-white flex items-center justify-center flex-col">
      <Header />
      <main className="flex flex-col pb-10 max-w-[90%] w-full">
        <h1>OUR BEERS</h1>

        <div className="grid w-full grid-cols-auto-3 gap-4 max-w-7xl">
          {data?.map(({ price, image, id, name }) => {
            console.log(checkIfImageExists(image));

            return (
              <Link
                to={generatePath(ROUTES.PRODUCT_DETAILS, { id })}
                className="flex flex-col flex-1 border-4 border-white p-4 cursor-pointer min-h-96"
                key={id}
              >
                <span className="flex justify-end">{price}</span>
                <div className="flex justify-center items-center flex-1">
                  <img
                    className="max-h-[400px] h-full w-96 object-contain object-center"
                    src={checkIfImageExists(image) ? image : bottle}
                    alt={name}
                  />
                </div>
                <span className="flex justify-start">{name}</span>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
