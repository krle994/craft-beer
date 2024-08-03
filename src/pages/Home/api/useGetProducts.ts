import { Product } from "./../../../services/products/types";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../services/products";

export function useGetProducts() {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}
