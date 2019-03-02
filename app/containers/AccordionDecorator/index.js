/**
 *
 * AccordionDecorator
 *
 */

import React from 'react';

export const accordionDecorator = OriginalComponent =>
  class AccordionDecorator extends React.Component {
    state = { open: true };

    toggleItem = () => {
      this.setState(state => ({ open: !state.open }));
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          toggleItem={this.toggleItem}
          isOpen={this.state.open}
        />
      );
    }
  };

export default accordionDecorator;
