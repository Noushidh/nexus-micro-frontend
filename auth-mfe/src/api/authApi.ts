const API_URL = "http://localhost:5000";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(`${API_URL}/users`);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};

export const registerUser = async (
  userData: Omit<User, "id">,
): Promise<User> => {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return response.json();
};
