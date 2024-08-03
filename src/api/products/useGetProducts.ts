import { Product } from '@/services/products/types';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/services/products';
import { useLocation } from 'react-router-dom';

export function useGetProducts() {
  const { pathname } = useLocation();

  return useQuery<Product[], Error>({
    queryKey: ['products', pathname],
    queryFn: getProducts,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
}
