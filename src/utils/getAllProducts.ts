export const getAllProductDataFromDb = async () => {
  const res = await fetch("http://localhost:5000/allproducts", {
    cache: "no-store",
  });
  const getProduct = await res.json();
  return getProduct;
};
