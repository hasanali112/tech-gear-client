export const getSingleProductFromDB = async (productId: string) => {
  const res = await fetch(`http://localhost:5000/product/${productId}`);
  const singleProduct = await res.json();
  return singleProduct;
};
