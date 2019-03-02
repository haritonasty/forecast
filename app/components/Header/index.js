/**
 *
 * Header
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { fontSize } from '../../utils/style';

import DateContainer from '../../containers/DateContainer';

const StyledHeader = styled.header`
  width: 100%;
  margin: 0;
  padding: 0 10px;
  font-size: ${fontSize.big}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Header({ className }) {
  return (
    <StyledHeader className={className}>
      <DateContainer />
    </StyledHeader>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
