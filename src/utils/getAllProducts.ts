export const getAllProductDataFromDb = async () => {
  const res = await fetch("https://gadget-server-beta.vercel.app/allproducts", {
    next: {
      revalidate: 30,
    },
  });
  const getProduct = await res.json();
  return getProduct;
};
