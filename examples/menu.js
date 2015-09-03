import React from '/support/react';
import { Menu } from '/lib';

/**
 * Menu example.
 */

export default React.createClass({
  render() {
    let sections = ['Home', 'Profile', 'Messages', 'Notifications'];

    return <Menu items={ sections } onChange={ change }/>

    function change(item) {
      // ...
    }
  }
});
