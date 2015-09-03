import uid from 'matthewmueller/uid';
import React from '/support/react';

/**
 * Table.
 */

export default React.createClass({
  render() {
    let { rows } = this.props;

    let tableRows = rows.map(function(row) {
      let rowCells = row.map(function(cell) {
        return (
          <td className='matter-Table-cell' colSpan='1' rowSpan='1' key={uid()}>
            <span key={uid()}>{ cell }</span>
          </td>
        );
      });

      return (
        <tr className='matter-Table-row' key={uid()}>
          { rowCells }
        </tr>
      );
    });

    return (
      <table className='matter-Table' cellPadding='0' cellSpacing='0'>
        <tbody>
          { tableRows }
        </tbody>
      </table>
    );
  }
});
