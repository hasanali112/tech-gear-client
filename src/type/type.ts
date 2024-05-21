export type TProduct = {
  _id: string;
  id: number;
  title: string;
  price: number;
  ratings: number;
  brand: string;
  category: string;
  description: string;
  image: string[];
  flashSale: boolean;
};
export type TCategory = {
  _id: string;
  title: string;
  image: string;
  brand: string;
  priceRange: string;
  rating: number;
};
