export const fetchAllProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");

  const product = await response.json();

  return product;
};


export const getSingleProduct = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  const product = await response.json();

  return product;
};



