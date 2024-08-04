import { ProductListItem } from '@/components/ProductListItem';

import { useGetProducts } from '@/api/products/useGetProducts';
import { MainLayout } from '@/layouts/MainLayout';

export function Home() {
  const { data, isLoading } = useGetProducts();

  if (isLoading) {
    return null;
  }

  return (
    <MainLayout>
      <div className="flex flex-col pb-10 max-w-[90%] w-full">
        <h1 className="text-6xl w-full py-10 text-center">OUR BEERS</h1>

        <div className="grid w-full grid-cols-auto-3 gap-4 max-w-7xl">
          {data?.map((item) => (
            <ProductListItem product={item} key={item.id} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
