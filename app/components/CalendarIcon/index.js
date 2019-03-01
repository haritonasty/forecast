/**
 *
 * CalendarIcon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function CalendarIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 58 58"
      className={className}
    >
      <path d="M43 5c-1-3-3-4-5-4a1 1 0 1 0 0 2 3 3 0 0 1 0 6 1 1 0 1 0 0 2c2 0 4-2 5-4h13v9H2V7h17a1 1 0 1 0 0-2h-2a3 3 0 1 1 3 4 1 1 0 1 0 0 2 5 5 0 1 0-5-6H0v53h58V5H43zm13 51H2V18h54v38z" />
      <path d="M26 3a3 3 0 0 1 0 6 1 1 0 1 0 0 2 5 5 0 0 0 0-10 1 1 0 1 0 0 2z" />
      <path d="M32 3a3 3 0 0 1 0 6 1 1 0 1 0 0 2 5 5 0 0 0 0-10 1 1 0 1 0 0 2zM9 26h22a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2zM49 40H34a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2zM9 34h10a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2zM49 48H39a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zM28 33l1 1h15a1 1 0 1 0 0-2H29l-1 1zM25 33v-1h-2v1a1 1 0 0 0 2 0zM13 41l1 1h15a1 1 0 1 0 0-2H14l-1 1zM9 42l1-1v-1H8v1l1 1zM49 34l1-1a1 1 0 0 0 0-1h-2v1l1 1zM34 48H9a1 1 0 1 0 0 2h25a1 1 0 1 0 0-2z" />
    </svg>
  );
}

CalendarIcon.propTypes = {
  className: PropTypes.string,
};

export default CalendarIcon;
