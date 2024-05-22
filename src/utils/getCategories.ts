export const getCategories = async () => {
  const res = await fetch("https://gadget-server-beta.vercel.app/categories", {
    cache: "no-store",
  });
  const categoryData = await res.json();
  return categoryData;
};
