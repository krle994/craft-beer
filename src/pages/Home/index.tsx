import { Header } from "@/components/Header";
import { ProductListItem } from "@/components/ProductListItem";

import { useGetProducts } from "@/api/products/useGetProducts";

export function Home() {
  const { data, isLoading } = useGetProducts();

  if (isLoading) {
    return null;
  }

  return (
    <main className="h-full w-screen text-white flex items-center justify-center flex-col font-bebas">
      <Header />
      <div className="flex flex-col pb-10 max-w-[90%] w-full">
        <h1 className="text-6xl w-full py-10 text-center">OUR BEERS</h1>

        <div className="grid w-full grid-cols-auto-3 gap-4 max-w-7xl">
          {data?.map(({ price, image, id, name }) => (
            <ProductListItem price={price} id={id} image={image} name={name} />
          ))}
        </div>
      </div>
    </main>
  );
}
