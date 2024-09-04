import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product?.id}`} key={product?.id}>
      <img src={product?.image} alt={product?.description} />
    </Link>
  );
};


export default ProductCard;