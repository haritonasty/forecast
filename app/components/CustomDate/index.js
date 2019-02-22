/**
 *
 * CustomDate
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  font-weight: 600;
`;

class CustomDate extends React.PureComponent {
  render() {
    return (
      <Button
        type="button"
        className="example-custom-input"
        onClick={this.props.onClick}
      >
        {this.props.customValue}
      </Button>
    );
  }
}

CustomDate.propTypes = {
  onClick: PropTypes.func,
  customValue: PropTypes.string,
};

export default CustomDate;
