import PropTypes from "prop-types";
import { FaGlobeAmericas } from "react-icons/fa";

export const Header = ({ title, description }) => {
  return (
    <>
      <div className="content-center">
         <FaGlobeAmericas size={28} style={{ marginBottom: "8px" }} />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};