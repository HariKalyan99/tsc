import { create } from "zustand";

import type { Product } from "../api/productSchema";

interface ProductState {
  products: Product[];
  setProduct: (products: Product[]) => void;
  addProduct: (product: Product) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  setProduct: (products) => set({ products }),
  addProduct: (product) =>
    set((state) => ({
      products: [product, ...state.products],
    })),
}));
