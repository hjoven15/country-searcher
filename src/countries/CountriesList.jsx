import PropTypes from "prop-types";
import { CountryCard } from "../components/CountryCard";

export const CountriesList = ({ countries }) => {
  if (countries === null) {
    return <p>Busca un país para comenzar.</p>;
  }

  if (countries.length === 0) {
    return <p>No hay países para mostrar.</p>;
  }

  return (
    <div className="countries-list">
      {countries.map((country) => (
        <CountryCard key={country.id} country={country} />
      ))}
    </div>
  );
};

CountriesList.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      flag: PropTypes.string.isRequired,
      capital: PropTypes.string,
      maps: PropTypes.string,
    })
  ),
};
