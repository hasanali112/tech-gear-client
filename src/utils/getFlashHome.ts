export const getFlashSale = async () => {
  const res = await fetch("http://localhost:5000/flash-sale", {
    next: {
      revalidate: 30,
    },
  });
  const flashSaleData = await res.json();
  return flashSaleData;
};
