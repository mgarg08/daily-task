import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from '../../hook/useFetch'
import "./style.css";
import { getSingleProduct } from "../service/productService";

export default function IndividualProductItem() {




  const { id } = useParams();
  const navigate = useNavigate();


  const {data:product,error,loading} = useFetch(()=>getSingleProduct(id))
 

  return (
    <div className="image-content-details">
      <button className="close-btn" onClick={() => navigate(-1)}>
        Back to Products
      </button>
      <img src={product?.image} alt={product?.description} className="image" />
      <div className="image-details">
        <p className="image-title">{product?.title}</p>
        <p className="image-price">${product?.price}</p>
        <p className="image-description">{product?.description}</p>
        <p className="image-rating">{product?.rating?.rate}</p>
      </div>
    </div>
  );
}
