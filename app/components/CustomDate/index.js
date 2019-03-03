/**
 *
 * CustomDate
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorTheme, fontSize, fontWeight } from '../../utils/style';
import CalendarIcon from '../CalendarIcon';

export const Button = styled.button`
  font-weight: ${fontWeight.big};
  cursor: pointer;
  outline-color: ${colorTheme.primary};
  padding: 4px 10px;
  font-size: ${fontSize.medium}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WrapperIcon = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

class CustomDate extends React.PureComponent {
  render() {
    return (
      <Button
        type="button"
        className="example-custom-input"
        onClick={this.props.onClick}
        title="Change day"
      >
        <WrapperIcon>
          <CalendarIcon />
        </WrapperIcon>
        {this.props.customValue}
      </Button>
    );
  }
}

CustomDate.propTypes = {
  onClick: PropTypes.func,
  customValue: PropTypes.string.isRequired,
};

export default CustomDate;
