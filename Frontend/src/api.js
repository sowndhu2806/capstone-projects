 export const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:8080"
    : "https://backend-production-5060.up.railway.app"
export const testBackend = async () => {
  const response = await fetch(`${API_URL}/hello`);

  if (!response.ok) {
    throw new Error("Backend connection failed");
  }

  return response.text();
};
