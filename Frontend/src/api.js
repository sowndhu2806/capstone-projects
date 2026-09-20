const API_URL = "http://localhost:8080";

export const testBackend = async () => {
  const response = await fetch(`${API_URL}/hello`);

  if (!response.ok) {
    throw new Error("Backend connection failed");
  }

  return response.text();
};