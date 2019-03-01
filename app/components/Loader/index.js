/**
 *
 * Loader
 *
 */

import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const colors = {
  blue: '#4285f4',
  red: '#ea4335',
  yellow: '#fbbc05',
  green: '#34a853',
};

const bouncingLoader = keyframes`
  to {
    transform: translate3d(0, -1rem, 0);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  
  
  & > div {
    width: 7px;
    height: 7px;
    margin: 2px;
    background: ${colors.blue};
    border-radius: 50%;
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
    <Wrapper className={className}>
      <div />
      <div />
      <div />
      <div />
    </Wrapper>
  );
}

Loader.propTypes = {
  className: PropTypes.string,
};

export default Loader;
