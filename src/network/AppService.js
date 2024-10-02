import { BASE_URL, userLanguage } from "network/Constant";

export const baseFetch = async (endpoint, options) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": userLanguage,
        ...options.headers,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      return { success: false, message: data.message || "Request failed" };
    }
    return data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};
