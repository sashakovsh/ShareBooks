import React from "react";
import PropTypes from "prop-types";

const Books = ({ name, author }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{author}</p>
    </div>
  );
};

Books.propTypes = {
  author: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default Books;
