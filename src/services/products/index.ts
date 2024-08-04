import { generatePath } from 'react-router-dom';
import axios from '@/api/axios';
import { Product } from './types';
import { PRODUCTS_ENDPOINT, PRODUCT_BY_ID_ENDPOINT } from './routes';
import { getRandomNumber } from '@/utils/getRandomNumber';

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

export async function addProduct(product: Partial<Product>) {
  const { data } = await axios.post<Product>(PRODUCTS_ENDPOINT, {
    price: product.price,
    name: product.name,
    image: product.image,
    rating: { average: 0, reviews: 0 },
    id: getRandomNumber(10000, 1000000),
  });

  return data;
}
