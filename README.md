# cancer-parser

Parses the `all-cancers-combined-acim.xsls` data file into usable data broken down by year.

This library will form part of a larger system to analyse this data and is a work in progress.

## Usage

First download the file `all-cancers-combined-acim.xsls` from [www.aihw.gov.au/reports/cancer/cancer-data-in-australia/data](https://www.aihw.gov.au/reports/cancer/cancer-data-in-australia/data).

See `index.js`

```js
const { parseData } = require('./src')

parseData('./all-cancers-combined-acim.xlsx')
  .then(({ incidents, populations }) => {
    console.log('Incidents', incidents)
    console.log('Populations', populations)
  })
  .catch(err => {
    console.error(err)
  })
```

## Development

<!-- prettier-ignore -->
| branch | status | coverage | notes |
| ------ | ------ | -------- | ----- |
| `develop` |  |  | Work in progress |
| `master` |  |  | Latest stable release |

### Prerequisites

- [NodeJS](htps://nodejs.org), version 10.16.3 LTS or better (I use [`nvm`](https://github.com/creationix/nvm) to manage Node versions — `brew install nvm`.)

### Test it

- `npm test` — runs the unit tests
- `npm run test:unit:cov` — runs the unit tests with code coverage
- `npm run test:mutants` — runs the mutation tests

### Lint it

```sh
npm run lint
```

## Contributing

Please see the [contributing notes](CONTRIBUTING.md).
