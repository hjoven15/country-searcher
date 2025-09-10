import { useState } from "react";
import Swal from "sweetalert2";
import { Search } from "./components/Search";
import { Header } from "./components/Header";
import { CountriesList } from "./countries/CountriesList";
import { getCountriesByName } from "./actions/getCountriesByName";
import "./App.css";

function App() {
  const [countries, setCountries] = useState(null);

  const handleSearch = async (searchCountry) => {
    if (!searchCountry || searchCountry.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Por favor ingresa un nombre de país válido.",
      });
      setCountries([]);
      return;
    }

    const newCountry = searchCountry.trim().toLowerCase();

    Swal.fire({
      title: "Buscando...",
      text: "Por favor espera",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const results = await getCountriesByName(newCountry);
      setCountries(results);

      Swal.close();

      if (results.length === 0) {
        Swal.fire({
          icon: "info",
          title: "Sin resultados",
          text: `No se encontraron países con el nombre "${searchCountry}".`,
        });
      }
    } catch (error) {
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
      setCountries([]);
    }
  };

  return (
    <>
      <Header title="CountriesApp" description="Buscador de Países" />

      <Search
        placeholder="Ingresa el nombre de un país..."
        onSearch={handleSearch}
      />

      <CountriesList countries={countries} />
    </>
  );
}

export default App;
