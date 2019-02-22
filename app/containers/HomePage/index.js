/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';

const StyledHeader = styled(Header)``;

const StyledCities = styled.div``;

const StyledMain = styled.div``;

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 'header header' 'cities main';
  height: 92vh;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto 1fr;
  ${StyledHeader} {
    grid-area: header;
  }

  ${StyledCities} {
    grid-area: cities;
    padding: 20px;
  }

  ${StyledMain} {
    grid-area: main;
    padding: 20px;
  }
`;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <StyledHeader />
        <StyledCities />
        <StyledMain />
      </Wrapper>
    );
  }
}
