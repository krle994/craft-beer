import { addProduct } from '@/services/products';
import { Product } from '@/services/products/types';
import { useMutation } from '@tanstack/react-query';

export const useAddNewProduct = () => {
  const mutation = useMutation({
    mutationFn: ({ payload }: { payload: Partial<Product> }) =>
      addProduct(payload),
  });

  const handleAddNewProduct = ({
    onSuccess,
    onError,
    data,
  }: {
    onSuccess?: () => void;
    onError?: (errorMessage: string) => void;
    data: Partial<Product>;
  }) => {
    mutation.mutate(
      { payload: data },
      {
        onSuccess: () => {
          if (onSuccess) {
            onSuccess();
          }
        },
        onError: (err) => {
          if (onError) {
            console.log(err);

            onError(err.message);
          }
        },
      }
    );
  };

  return { handleAddNewProduct, ...mutation };
};
