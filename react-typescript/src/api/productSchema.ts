import z from "zod";

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const AddProductSchema = z.object({
  name: z.string().min(1),
});

export type Product = z.infer<typeof ProductSchema>;

export type AddProduct = z.infer<typeof AddProductSchema>;
