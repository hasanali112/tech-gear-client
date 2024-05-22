export const getAllProductDataFromDb = async () => {
  const res = await fetch("http://localhost:5000/allproducts", {
    next: {
      revalidate: 30,
    },
  });
  const getProduct = await res.json();
  return getProduct;
};
