import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addProduct, fetchProducts } from "../api/productApi";

export const Products = () => {
  const queryClient = useQueryClient();
  const [product, setProduct] = useState("");

  const mutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  const handleAdd = (name: string) => {
    mutation.mutate({ name });
    setProduct("");
  };

  return (
    <div>
      <h1>Products</h1>

      {data?.map((product) => (
        <div key={product.id}>
          <p>{product?.name}</p>
        </div>
      ))}

      <input
        type="text"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        className="outline"
      />
      <button type="button" onClick={() => handleAdd(product)}>
        Add product
      </button>
    </div>
  );
};
