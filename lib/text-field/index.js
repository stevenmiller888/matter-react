import React from '/support/react';

/**
 * TextField.
 */

export default React.createClass({
  render() {
    let { placeholder } = this.props;

    let attrs = {
      className: 'matter-TextField',
      placeholder: placeholder
    };

    return (
      <input { ...attrs }>
      </input>
    );
  }
});
