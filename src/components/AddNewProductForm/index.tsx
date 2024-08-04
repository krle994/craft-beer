import { Input } from '@/components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { addProductSchema } from './schema';
import type { AddProductForm } from './types';
import { useAddNewProduct } from '@/api/products/useAddNewProduct';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

export const AddNewProductForm = ({ children }: { children: JSX.Element }) => {
  const { handleAddNewProduct } = useAddNewProduct();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AddProductForm>({
    defaultValues: {
      name: '',
      abv: undefined,
      price: undefined,
      brand: '',
      image: '',
    },
    resolver: yupResolver(addProductSchema),
  });

  const onSubmit = (data: AddProductForm) => {
    handleAddNewProduct({
      data,
      onError: (err) => {
        toast.error(err);
      },
      onSuccess: () => {
        toast.success('Product added successfully');
        navigate(ROUTES.HOME);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-8">
        <Input
          name="name"
          label="Product name"
          error={errors?.name?.message as string}
          register={register}
          className="w-full"
        />
        <div className="flex gap-4">
          <div className="flex flex-col gap-8">
            <Input
              name="abv"
              type="number"
              step=".01"
              label="Product abv"
              error={errors?.abv?.message as string}
              register={register}
            />
            <Input
              name="price"
              type="number"
              step=".01"
              label="Product price"
              error={errors?.price?.message as string}
              register={register}
            />
          </div>
          <div className="flex flex-col gap-8">
            <Input
              name="brand"
              label="Product brand"
              error={errors?.brand?.message as string}
              register={register}
            />
            <Input
              name="image"
              label="Product image url"
              error={errors?.image?.message as string}
              register={register}
            />
          </div>
        </div>
      </div>
      {children}
    </form>
  );
};
