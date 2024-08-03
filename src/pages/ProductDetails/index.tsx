import { useParams } from "react-router-dom";
import { useGetProductById } from "../Home/api/useGetProductById";

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  const { data, isLoading, isError, error } = useGetProductById(id);

  console.log(data);

  return <>Product Details</>;
}
