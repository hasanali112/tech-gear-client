export const getSingleProductFromDB = async (productId: string) => {
  const res = await fetch(
    `https://gadget-server-beta.vercel.app/product/${productId}`,
    {
      cache: "no-store",
    }
  );
  const singleProduct = await res.json();
  return singleProduct;
};
