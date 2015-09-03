import uid from 'matthewmueller/uid';
import React from '/support/react';

/**
 * Menu.
 */

export default React.createClass({
  getInitialState: function() {
    return { activeItem: this.props.items[0] }
  },
  render() {
    let { props, state, setState } = this;
    let { items } = props;
    let currentItem = state.activeItem;

    return (
      <div className='matter-Menu'>
        { items.map((item) => <Item isActive={currentItem === item} item={item} onClick={this.onClick} key={uid()}/>) }
      </div>
    );
  },
  onClick(activeItem) {
    this.setState({ activeItem: activeItem });
    if (this.props.onChange) this.props.onChange(activeItem);
  }
});

/**
 * Item.
 */

let Item = React.createClass({
  getInitialState: function() {
    return { isActive: this.props.isActive };
  },
  render() {
    let { props, state, setState } = this;

    let classes = 'matter-Menu-item';
    if (state.isActive) classes += ' active';

    return (
      <div className={classes} onClick={this.onClick}>
        <span>{props.item}</span>
      </div>
    );
  },
  onClick() {
    this.props.onClick(this.props.item);
  }
});
