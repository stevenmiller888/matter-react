import React from '/support/react';
import examples from './examples' ;
import Code from './lib/code';
import Menu from './lib/menu';

/**
 * App.
 */

let App = React.createClass({
  getInitialState() {
    return { defaultActive: 'Code' };
  },

  render() {
    let example = examples[this.state.defaultActive];
    let items = Object.keys(examples);

    return (
      <div className='App'>
        <div className='App-menu'>
          <Menu items={ items } onChange={this.change}></Menu>
        </div>
        <div className='App-example'>
          <div className='App-example-component'>
            { example.component }
          </div>
          <div className='App-example-code'>
            <Code language='html'>
              { example.code }
            </Code>
          </div>
        </div>
      </div>
    );
  },

  change(item) {
    this.setState({ defaultActive: item })
  }
});

React.render(<App/>, document.querySelector('main'));
