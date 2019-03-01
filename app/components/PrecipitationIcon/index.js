/**
 *
 * PrecipitationIcon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function PrecipitationIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
    >
      <path d="M503 141c-14 0-21-6-29-14-10-9-20-18-41-18s-32 9-42 18c-8 8-15 14-29 14s-21-6-29-14c-10-9-21-18-42-18s-31 9-41 18c-8 8-15 14-29 14-15 0-21-6-30-14-9-9-20-18-41-18s-32 9-41 18c-9 8-15 14-30 14s-21-6-29-14c-10-9-20-18-41-18a9 9 0 1 0 0 17c14 0 21 6 29 14 10 8 20 18 41 18s32-10 42-18c8-8 15-14 29-14s21 6 29 14c10 8 21 18 42 18s31-10 41-18c8-8 15-14 29-14s21 6 30 14 20 18 41 18 32-10 41-18 15-14 30-14c14 0 21 6 29 14 10 8 20 18 41 18a9 9 0 1 0 0-17zM503 223c-14 0-21-6-29-14-10-9-20-19-41-19s-32 10-42 19c-8 8-15 14-29 14s-21-6-29-14c-10-9-21-19-42-19s-31 10-41 19c-8 8-15 14-29 14-15 0-21-6-30-14l-3-3a9 9 0 0 0-12 13l3 3c10 8 21 18 42 18s31-10 41-18c8-8 15-14 29-14s21 6 30 14 20 18 41 18 32-10 41-18 15-14 30-14c14 0 21 6 29 14 10 8 20 18 41 18a9 9 0 1 0 0-17zM162 192l-12-2c-21 0-32 10-41 19-9 8-15 14-30 14s-21-6-29-14c-10-9-20-19-41-19a9 9 0 1 0 0 18c14 0 21 6 29 14 10 8 20 18 41 18s32-10 42-18c8-8 15-14 29-14l9 1a9 9 0 0 0 3-17zM503 386c-14 0-21-6-29-14-10-8-20-18-41-18s-32 10-42 18c-8 8-15 14-29 14s-21-6-29-14c-10-8-21-18-42-18s-31 10-41 18c-8 8-15 14-29 14-15 0-21-6-30-14s-20-18-41-18-32 10-41 18-15 14-30 14a9 9 0 1 0 0 17c21 0 32-9 42-18 8-8 15-14 29-14s21 6 29 14c10 9 21 18 42 18s31-9 41-18c8-8 15-14 29-14s21 6 30 14c9 9 20 18 41 18s32-9 41-18c9-8 15-14 30-14 14 0 21 6 29 14 10 9 20 18 41 18a9 9 0 1 0 0-17zM59 380l-9-8c-10-8-20-18-41-18a9 9 0 1 0 0 17c14 0 21 6 29 14l11 9a9 9 0 0 0 12-2c3-4 2-9-2-12zM503 304c-14 0-21-6-29-14-10-8-20-18-41-18s-32 10-42 18a9 9 0 1 0 12 13c9-8 15-14 30-14 14 0 21 6 29 14 10 9 20 19 41 19a9 9 0 1 0 0-18zM382 310c-1-5-6-8-10-7l-10 1c-14 0-21-6-29-14-10-8-21-18-42-18s-31 10-41 18c-8 8-15 14-29 14-15 0-21-6-30-14s-20-18-41-18-32 10-41 18-15 14-30 14-21-6-29-14c-10-8-20-18-41-18a9 9 0 1 0 0 17c14 0 21 6 29 14 10 9 20 19 41 19s32-10 42-19c8-8 15-14 29-14s21 6 29 14c10 9 21 19 42 19s31-10 41-19c8-8 15-14 29-14s21 6 30 14c9 9 20 19 41 19l14-2c5-1 7-6 6-10z" />
    </svg>
  );
}

PrecipitationIcon.propTypes = {
  className: PropTypes.string,
};

export default PrecipitationIcon;
