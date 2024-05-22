export const getFlashSale = async () => {
  const res = await fetch("https://gadget-server-beta.vercel.app/flash-sale", {
    next: {
      revalidate: 30,
    },
  });
  const flashSaleData = await res.json();
  return flashSaleData;
};
