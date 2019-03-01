/**
 *
 * HumidityIcon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function HumidityIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
    >
      <path d="M291 220l-20-39a9 9 0 1 0-15 8l19 38a114 114 0 0 1-67 147c-12 4-24 6-36 7A114 114 0 0 1 68 227L172 27l70 136a9 9 0 0 0 15-8L179 5a9 9 0 0 0-15 0L53 220h-1a131 131 0 0 0 77 170 131 131 0 0 0 43 8 131 131 0 0 0 119-178zM464 278l-1-1-19-38a9 9 0 0 0-15 8l19 38a52 52 0 0 1-47 69 52 52 0 0 1-47-69l47-91 15 30a9 9 0 0 0 16-8l-24-45a9 9 0 0 0-15 0l-55 106v1a69 69 0 0 0 40 89 69 69 0 0 0 23 5 69 69 0 0 0 63-94zM354 445l-37-71a9 9 0 0 0-15 0l-37 71v1a49 49 0 0 0 45 66 49 49 0 0 0 44-67zm-34 48l-10 2a32 32 0 0 1-29-43l29-55 28 55c6 17-2 35-18 41z" />
    </svg>
  );
}

HumidityIcon.propTypes = {
  className: PropTypes.string,
};

export default HumidityIcon;
