import React from '/support/react';

/**
 * Button.
 */

export default React.createClass({
  render() {
    let { label, size, type, onClick } = this.props;

    type = type || 'primary';
    size = size || 'medium';

    let classes = ['matter-Button'];
    if (type) classes.push(type);
    if (size) classes.push(size);

    let attrs = {
      className: classes.join(' '),
      onClick: onClick
    };

    return (
      <button { ...attrs }>
        { label }
      </button>
    );
  }
});
