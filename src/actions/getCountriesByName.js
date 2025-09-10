import axios from "axios";

const URL = "https://restcountries.com/v3.1";

export const getCountriesByName = async (name) => {
  try {
    const response = await axios.get(
      `${URL}/name/${encodeURIComponent(name.trim())}`
    );

    return response.data.map((country) => ({
      id: country.cca3,
      name: country.name.common,
      flag: country.flags.png,
      capital: country.capital ? country.capital[0] : "No tiene capital",
      maps: country.maps?.googleMaps || "",
    }));
  } catch (error) {
    if (error.response) {
      if (error.response.status === 404) {
        return [];
      }
      throw new Error(
        `Error en la API: ${error.response.status} ${error.response.statusText}`
      );
    } else if (error.request) {
      throw new Error(
        "Error de conexión. Verifica tu conexión a internet e intenta nuevamente."
      );
    } else {
      throw new Error(`Error en la configuración: ${error.message}`);
    }
  }
};
