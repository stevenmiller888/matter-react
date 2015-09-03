import React from '/support/react';
import { Button } from '/lib';

/**
 * Button example.
 */

export default React.createClass({
  render() {
    let style = { marginTop: '7px' };

    return (
      <div>
        <div>
          <div style={style}>
            <Button label='Large' size='large' type='primary'/>
          </div>
          <div style={style}>
            <Button label='Medium' size='medium' type='primary'/>
          </div>
          <div style={style}>
            <Button label='Small' size='small' type='primary'/>
          </div>
        </div>
        <div style={ { marginTop: '40px'} }>
          <div style={style}>
            <Button label='Primary' size='medium' type='primary'/>
          </div>
          <div style={style}>
            <Button label='Secondary' size='medium' type='secondary'/>
          </div>
          <div style={style}>
            <Button label='Warning' size='medium' type='warning'/>
          </div>
        </div>
      </div>
    );
  }
});
