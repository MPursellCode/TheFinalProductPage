export const getProductList = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    return await response.json();
  } catch (error) {
    console.error("Error fetching product list:", error);
    return null;
  }
};

export const getProductDetail = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching product detail:", error);
    return null;
  }
};
