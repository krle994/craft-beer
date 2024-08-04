import { Product } from "@/services/products/types";

export type ProductListItemProps = Omit<Product, 'rating' | 'style' | 'description' | "abv">