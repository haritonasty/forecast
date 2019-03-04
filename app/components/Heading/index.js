/**
 *
 * Heading
 *
 */

import styled from 'styled-components';

import { colorTheme, fontSize, fontWeight } from '../../utils/style';

const Heading = styled.h2`
  font-family: inherit;
  font-weight: ${fontWeight.big};
  text-align: center;
  text-transform: uppercase;
  font-size: ${fontSize.big}px;
  width: 100%;
  color: ${colorTheme.primary};
`;

export default Heading;
