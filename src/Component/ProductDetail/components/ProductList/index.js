import React from "react";
import "./style.css";
import useFetch from "../../hook/useFetch";
import { fetchAllProducts } from "../service/productService";
import ProductCard from "./product-card";

export default function ProductList() {
  const { loading, error, data: products } = useFetch(fetchAllProducts);

  if (loading) return <div>loading....</div>;
  if(error) return <p>Product list not found</p>

  return (
    <div className="product-card">
      {products?.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
