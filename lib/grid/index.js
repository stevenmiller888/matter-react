import React from '/support/react';

/**
 * Grid.
 */

export default React.createClass({
  render() {
    return (
      <ul className='matter-Grid'>
        { this.props.children }
      </ul>
    );
  }
});
