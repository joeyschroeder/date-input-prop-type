[![npm](https://img.shields.io/npm/v/date-input-prop-type.svg)](https://www.npmjs.com/package/date-input-prop-type)
[![npm downloads](https://img.shields.io/npm/dt/date-input-prop-type.svg)](https://www.npmjs.com/package/date-input-prop-type)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![GitHub issues](https://img.shields.io/github/issues/joeyschroeder/date-input-prop-type.svg)](https://github.com/joeyschroeder/date-input-prop-type/issues)
[![GitHub stars](https://img.shields.io/github/stars/joeyschroeder/date-input-prop-type.svg)](https://github.com/joeyschroeder/date-input-prop-type/stargazers)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![Dependency status](https://david-dm.org/joeyschroeder/date-input-prop-type/status.svg)](https://david-dm.org/joeyschroeder/date-input-prop-type/)
[![devDependency status](https://david-dm.org/joeyschroeder/date-input-prop-type/dev-status.svg)](https://david-dm.org/joeyschroeder/date-input-prop-type/?type=dev)

# Date Input Prop Type
A React, & React Native `prop-type` to validate the `value`, `min`, and `max` attributes of `<input>` elemenst with `type="date"`.

## Installation
`npm install date-input-prop-type --save`

## Usage
Import **dateInputPropType**

```
import { dateInputPropType } from 'date-input-prop-type';
```

Use as follows:

```
import React, { Component } from 'react';
import { dateInputPropType } from 'date-input-prop-type';

export class YourComponent extends Component {
  static propTypes = {
    max: dateInputPropType,
    min: dateInputPropType,
    value: dateInputPropType
  }

  static defaultProps = {
    max: '2020-01-01',
    min: '1989-06-28',
    value: '2019-01-01'
  }

  ...

  render() {
    const { value, min, max } = this.props;
    return <input type="date" value={value} min={min} max={max} />;
  }
}
```

## Versioning
I use [SemVer](https://docs.npmjs.com/getting-started/semantic-versioning) for versioning. For the versions available, see the [tags on this repository](https://github.com/joeyschroeder/date-input-prop-type/tags).

## Authors
* **Joey Schroeder** - *Initial work* - [joeyschroeder.com](https://joeyschroeder.com)

See also the list of [contributors](https://github.com/joeyschroeder/date-input-prop-type/graphs/contributors) who participated in this project.

## Contributing
Please submit a pull request with any features/fixes for the project. I apologize in advance for the slow action on pull requests and issues. Please follow the [ESLint rules](https://github.com/joeyschroeder/date-input-prop-type/blob/master/.eslintrc.json) for the project.

## License
This project is licensed under the MIT License - see the [MIT Open Source Initiative](https://opensource.org/licenses/MIT) for details.

## Acknowledgments
Hat tip to anyone who's code was used! 🤠
