/**
 *
 * SearchIcon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function SearchIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
    >
      <path
        fill="#fbbb00"
        d="M113 309l-17 67-65 1a255 255 0 0 1-2-239l58 11 25 58a152 152 0 0 0 1 102z"
      />
      <path
        fill="#518ef8"
        d="M508 208a256 256 0 0 1-92 248l-73-4-10-65c30-17 53-45 66-78H262V208h246z"
      />
      <path
        fill="#28b446"
        d="M416 456a255 255 0 0 1-385-79l82-68a152 152 0 0 0 220 78l83 69z"
      />
      <path
        fill="#f14336"
        d="M419 59l-83 68a152 152 0 0 0-224 80l-83-69a256 256 0 0 1 390-79z"
      />
    </svg>
  );
}

SearchIcon.propTypes = {
  className: PropTypes.string,
};

export default SearchIcon;
