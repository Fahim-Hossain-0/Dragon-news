export const getCategories = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/categories`
  );

  if (!res.ok) throw new Error("Failed to load categories");

  return res.json();
};

export const getProducts = async (category) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${category}`
  );

  if (!res.ok) throw new Error("Failed to load products");

  return res.json();
};