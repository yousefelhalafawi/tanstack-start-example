import { queryOptions } from "@tanstack/react-query";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

export type ProductsResponse = {
  products: Product[];
};

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data: ProductsResponse = await response.json();
  return data.products;
};

export const productsQueryOptions = () => {
  return queryOptions({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
