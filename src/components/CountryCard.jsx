import PropTypes from "prop-types";

export const CountryCard = ({ country }) => {
  return (
    <>
      <img
        src={country.flag}
        alt={`Bandera de ${country.name}`}
        className="country-flag"
      />
      <h3>{country.name}</h3>
      <p><strong>Capital:</strong> {country.capital}</p>
      {country.maps && (
        <p>
          <a href={country.maps} target="_blank" rel="noopener noreferrer">
            Ver en Google Maps
          </a>
        </p>
      )}
    </>
  );
};

CountryCard.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    capital: PropTypes.string,
    maps: PropTypes.string,
  }).isRequired,
};
