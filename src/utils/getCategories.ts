export const getCategories = async () => {
  const res = await fetch("http://localhost:5000/categories", {
    cache: "no-store",
  });
  const categoryData = await res.json();
  return categoryData;
};
