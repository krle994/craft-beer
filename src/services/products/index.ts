import { generatePath } from 'react-router-dom';
import axios from '@/api/axios';
import { Product } from './types';
import { PRODUCTS_ENDPOINT, PRODUCT_BY_ID_ENDPOINT } from './routes';

export async function getProducts() {
  const { data } = await axios.get<Product[]>(PRODUCTS_ENDPOINT);

  return data;
}

export async function getProductById(id: string) {
  const { data } = await axios.get<Product>(
    generatePath(PRODUCT_BY_ID_ENDPOINT, { id }),
  );

  return data;
}
