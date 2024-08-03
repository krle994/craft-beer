import { Product } from '../../services/products/types';
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '@/services/products';

export function useGetProductById(id: string) {
  return useQuery<Product, Error>({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
    refetchOnMount: true,
    enabled: !!id,
  });
}
