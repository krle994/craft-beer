import * as yup from 'yup';
import { AddProductForm } from './types';

export const addProductSchema: yup.ObjectSchema<AddProductForm> = yup
  .object()
  .shape({
    name: yup.string().required('Name is required'),
    brand: yup.string().nullable().required('Brand is required'),
    abv: yup
      .number()
      .nullable()
      .min(0, 'ABV cannot be less than 0')
      .max(100, 'ABV cannot be higher that 100')
      .typeError('ABV must be a number')
      .required('ABV is required'),
    price: yup
      .number()
      .nullable()
      .typeError('Price must be a number')
      .min(0, 'Price cannot be less than 0')
      .required('Price is required'),
    image: yup
      .string()
      .url('Image must be a url')
      .nullable()
      .required('Image is required'),
  });
