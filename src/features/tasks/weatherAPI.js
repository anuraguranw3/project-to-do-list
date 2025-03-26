const KEY = "3cc93a01996d4195b8f85813231405"; // free api key i picked up from a youtube github repo.
const API_URL = "https://api.weatherapi.com/v1";
const API_URL_CURRENT = `${API_URL}/current.json?key=${KEY}`;

export async function getWeather(city) {
  try {
    const response = await fetch(`${API_URL_CURRENT}&q=${city}`, { mode: "cors" });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Failed to fetch weather data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    throw error;
  }
}