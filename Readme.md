
# matter-react

[Matter](https://github.com/stevenmiller888/matter) components rebuilt in React.

![](https://cldup.com/xTRE1NuYTv.png)

## Installation

`npm install matter-react`

You can also use Duo to require Matter straight from Github:

`import Matter from 'stevenmiller888/matter-react';`

Or you can download the [files](https://github.com/stevenmiller888/matter-react/tree/master/dist) directly.

## Usage

```js
import { Button } from 'stevenmiller888/matter-react';
import React from 'facebook/react';

React.render(<Button/>, document.body);
```

## Components

### Button

```js
<Button label="Default" size="small" type="default" />
```
  
### Code
  
```js
<Code language='javascript'>
{`
var Git = require('gity');

var git = Git()
  .add('*.js')
  .commit('-m "added js files"')
  .run();
`}
</Code>
```

### Menu

```js
let sections = ['Home', 'Profile', 'Messages', 'Notifications'];

<Menu onChange={ change } items={ sections } />
```

### Table

```js
let people = [
  ['Full Name', 'Age'], // header row
  ['Steven Miller', '25'],
  ['Tamara Jordan', '23'],
  ['John Smith', '28']
];

<Table rows={ people } />
```

### Text Field

```js
<TextField placeholder='e.g. Steven Miller' />
```

### Grid

```js
<Grid>
  // ... children
</Grid>
```


## License

[MIT](https://tldrlegal.com/license/mit-license)
