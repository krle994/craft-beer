export interface Product {
  price: number;
  name: string;
  rating: {
    average: number;
    reviews: number;
  };
  image: string;
  id: number;
  description: string;
  abv: number;
  style: string;
}
