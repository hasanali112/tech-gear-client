export const getFlashSaleData = async () => {
  const res = await fetch("https://gadget-server-beta.vercel.app/flash-sale", {
    cache: "no-store",
  });
  const flashSaleData = await res.json();
  return flashSaleData;
};
