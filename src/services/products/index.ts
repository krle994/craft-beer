import { generatePath } from "react-router-dom";
import axios from "../../api/axios";
import { Product } from "./types";

const PRODUCTS_ENDPOINT = "/beers/ale";
const PRODUCT_BY_ID_ENDPOINT = "/beers/ale/:id";

export async function getProducts() {
  const { data } = await axios.get<Product[]>(PRODUCTS_ENDPOINT);

  return data;
}

export async function getProductById(id: string) {
  const { data } = await axios.get<Product>(
    generatePath(PRODUCT_BY_ID_ENDPOINT, { id })
  );

  return data;
}
