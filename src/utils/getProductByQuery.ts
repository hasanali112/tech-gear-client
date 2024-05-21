export const getProductByQuery = async (searchType: any) => {
  const res = await fetch(`http://localhost:5000/brand?${searchType}`, {
    cache: "no-store",
  });
  const getProductData = await res.json();
  return getProductData;
};
