export const getProductByQuery = async (params: string) => {
  const res = await fetch(`http://localhost:5000/all-products/${params}`, {
    cache: "no-store",
  });
  const getProductData = await res.json();
  return getProductData;
};
