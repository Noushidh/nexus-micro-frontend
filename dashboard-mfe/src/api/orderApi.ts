const API_URL = "http://localhost:5000";

export const getOrders = async () => {
  const response = await fetch(`${API_URL}/orders`);

  if (!response.ok) {
    throw new Error("Failed to fetch orders");
  }

  return response.json();
};