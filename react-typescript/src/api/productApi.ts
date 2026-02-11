import axios from "axios";
import { AddProductSchema, ProductSchema } from "./productSchema";

export const fetchProducts = async () => {
  const { data } = await axios.get("http://localhost:8081/products");
  return ProductSchema.array().parse(data);
};

export const addProduct = async (product: unknown) => {
  const validated = AddProductSchema.parse(product);
  const { data } = await axios.post(
    "http://localhost:8081/products",
    validated,
  );

  return ProductSchema.parse(data);
};
