import { useParams } from "react-router-dom";
import { useGetProductById } from "@/api/products/useGetProductById";
import { Header } from "@/components/Header";
import { Product } from "@/services/products/types";
import { checkIfImageExists } from "@/utils/imageExists";
import bottle from "@/assets/images/bottle.webp";
import { Button } from "@/components/Button";

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    // TODO: redirect to 404

    return null;
  }

  const { data, isLoading } = useGetProductById(id);

  if (isLoading) return null;

  const { image, name, price, description, abv, style } = data as Product;

  return (
    <div className="h-full w-screen text-white flex items-center justify-center flex-col font-bebas">
      <Header />

      <main className="flex gap-8 pb-10 max-w-[90%] w-full">
        <div className="flex-[3] flex justify-center items-center">
          <img
            className="max-h-[350px] h-full w-96 object-contain object-center"
            src={checkIfImageExists(image) ? image : bottle}
            alt={name}
          />
        </div>
        <div className="flex flex-[5] flex-col">
          <h1 className="text-6xl pb-4">{name}</h1>
          <p className="text-3xl">{description}</p>

          <div className="h-1 bg-white my-5" />

          <div className="flex justify-between gap-4 items-center py-4">
            <p className="text-3xl">ABV</p>
            <p className="text-3xl">{`${abv.toFixed(2)}%`}</p>
          </div>
          <div className="flex justify-between gap-4 items-center py-4">
            <p className="text-3xl">Style</p>
            <p className="text-3xl">{style}</p>
          </div>
          <div className="h-1 bg-white my-5" />
          <p className="text-3xl">{price}</p>

          <Button
            onClick={() => {}}
            className="text-2xl bg-white text-black w-full p-2 mt-8"
          >
            Add to cart
          </Button>
        </div>
      </main>
    </div>
  );
}
