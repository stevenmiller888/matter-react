import React from '/support/react';
import { Table } from '/lib';

/**
 * Table example.
 */

export default React.createClass({
  render() {
    let people = [
      ['Full Name', 'Age'],
      ['Steven Miller', '25'],
      ['Tamara Jordan', '23'],
      ['John Smith', '28']
    ];

    return <Table rows={ people }/>
  }
});
