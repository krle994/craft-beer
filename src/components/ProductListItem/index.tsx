import { generatePath, Link } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { checkIfImageExists } from "@/utils/imageExists";
import bottle from "@/assets/images/bottle.webp";
import { ProductListItemProps } from "./types";

export function ProductListItem({
  price,
  image,
  id,
  name,
}: ProductListItemProps) {
  return (
    <Link
      to={generatePath(ROUTES.PRODUCT_DETAILS, { id })}
      className="flex flex-col flex-1 border-4 border-white p-4 cursor-pointer min-h-96"
      key={id}
    >
      <span className="flex justify-end text-2xl pb-4">{price}</span>
      <div className="flex justify-center items-center flex-1">
        <img
          className="max-h-[400px] h-full w-96 object-contain object-center"
          src={checkIfImageExists(image) ? image : bottle}
          alt={name}
        />
      </div>
      <span className="flex justify-start text-2xl pt-4">{name}</span>
    </Link>
  );
}
