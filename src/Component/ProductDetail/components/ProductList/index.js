import React from "react";
import "./style.css";
import useFetch from "../../hook/useFetch";
import { fetchAllProducts } from "../service/productService";
import ProductCard from "./product-card";

export default function ProductList() {
  const { loading, error, data: products } = useFetch(fetchAllProducts);

  if (loading) return <div>loading....</div>;

  return (
    <div className="product-card">
      {products?.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
