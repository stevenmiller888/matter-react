import React from '/support/react';
import { Code } from '/lib';

/**
 * Code example.
 */

export default React.createClass({
  render() {
    return (
      <Code language='javascript'>
    {`
    var Git = require('gity');

    var git = Git()
      .add('*.js')
      .commit('-m "added js files"')
      .run();
    `}
      </Code>
    );
  }
});
