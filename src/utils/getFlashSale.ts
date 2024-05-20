export const getFlashSaleData = async () => {
  const res = await fetch("http://localhost:5000/flash-sale", {
    cache: "no-store",
  });
  const flashSaleData = await res.json();
  return flashSaleData;
};
