/**
 *
 * WeatherInfo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fontSize } from '../../utils/style';

import WindIcon from '../WindIcon';
import HumidityIcon from '../HumidityIcon';
import PrecipitationIcon from '../PrecipitationIcon';

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 700px) {
    justify-content: space-around;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Name = styled.span`
  font-size: ${fontSize.small}px;
`;

const Value = styled.span`
  font-size: ${fontSize.medium}px;
`;

const WrapperIcon = styled.div`
  width: 40px;
  height: 40px;
  margin: 20px 0;
`;

function WeatherInfo({ info }) {
  return (
    <List>
      <Item>
        <Name>Humidity</Name>
        <WrapperIcon>
          <HumidityIcon />
        </WrapperIcon>
        {info && <Value>{info.humidity}%</Value>}
      </Item>
      <Item>
        <Name>Wind</Name>
        <WrapperIcon>
          <WindIcon />
        </WrapperIcon>
        {info && (
          <Value>
            {info.wind}
            m/s
          </Value>
        )}
      </Item>
      <Item>
        <Name>Precipitation</Name>
        <WrapperIcon>
          <PrecipitationIcon />
        </WrapperIcon>
        {info && (
          <Value>
            {info.precipitation}
            mm
          </Value>
        )}
      </Item>
    </List>
  );
}

WeatherInfo.propTypes = {
  info: PropTypes.object,
};

export default WeatherInfo;
