import styled, { keyframes } from 'styled-components';
import { colors } from './colors';

const Circle = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${colors.blue};
`;

export const bouncingLoader = keyframes`
  to {
    transform: translate3d(0, -1rem, 0);
  }
`;

export default Circle;
