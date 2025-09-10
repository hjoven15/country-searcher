import PropTypes from "prop-types";
import { useState } from "react";

export const Search = ({ placeholder, onSearch }) => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    onSearch(search);
    setIsLoading(false);
    setSearch("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setIsLoading(true);
      onSearch(search);
      setIsLoading(false);
      setSearch("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Buscando..." : "Buscar"}
      </button>
    </form>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
