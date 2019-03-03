/**
 *
 * Loader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Circle, { bouncingLoader } from './Circle';
import { colors } from './colors';
import Wrapper from './Wrapper';

const StyledWrapper = styled(Wrapper)`
  & > ${Circle} {
    margin: 2px;
    animation: ${bouncingLoader} 500ms infinite alternate;
    
    &:nth-child(2) {
      background: ${colors.red};
      animation-delay: 125ms;
    }
    
    &:nth-child(3) {
      background: ${colors.yellow};
      animation-delay: 250ms;
    }
    
    &:nth-child(4) {
      background: ${colors.green};
      animation-delay: 375ms;
    }
  }
}
`;

function Loader({ className }) {
  return (
    <StyledWrapper className={className}>
      <Circle />
      <Circle />
      <Circle />
      <Circle />
    </StyledWrapper>
  );
}

Loader.propTypes = {
  className: PropTypes.string,
};

export default Loader;
