export const getProductByQuery = async (searchType: any) => {
  const res = await fetch(
    `https://gadget-server-beta.vercel.app/brand?${searchType}`,
    {
      cache: "no-store",
    }
  );
  const getProductData = await res.json();
  return getProductData;
};
