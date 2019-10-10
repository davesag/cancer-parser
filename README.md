# cancer-parser

Parses the `all-cancers-combined-acim.xsls` data file into usable data broken down by year.

This library will form part of a larger system to analyse this data and is a work in progress.

## Useful links

- https://www.aihw.gov.au/reports/cancer/cancer-data-in-australia/data
- https://www.ngdc.noaa.gov/stp/space-weather/solar-data/solar-features/solar-flares/index/comprehensive-flare-index/documentation/miscellaneous/
- https://www.researchgate.net/publication/226250481_North-South_asymmetry_in_the_solar_flare_index

## Usage

First download the data file and put them in the folder `data/`

- `all-cancers-combined-acim.xsls` from [www.aihw.gov.au/reports/cancer/cancer-data-in-australia/data](https://www.aihw.gov.au/reports/cancer/cancer-data-in-australia/data).
- `cfi_daily_1966-2008.xlsx` from [www.ngdc.noaa.gov/stp/space-weather/solar-data/solar-features/solar-flares/index/comprehensive-flare-index/documentation/miscellaneous](https://www.ngdc.noaa.gov/stp/space-weather/solar-data/solar-features/solar-flares/index/comprehensive-flare-index/documentation/miscellaneous)

See `index.js` for example of use.

```js
const { parseCancerData, parseSolarFlareData } = require('./src')

parseCancerData('./data/all-cancers-combined-acim.xlsx')
  .then(({ incidents, populations }) => {
    console.log('Incidents', incidents)
    console.log('Populations', populations)
  })
  .catch(err => {
    console.error(err)
  })

parseSolarFlareData('./data/cfi_daily_1966-2008.xlsx')
  .then(({ flares }) => {
    console.log('Flares', flares)
  })
  .catch(err => {
    console.error(err)
  })
```

## Development

[![Greenkeeper badge](https://badges.greenkeeper.io/industrieco/cancer-parser.svg)](https://greenkeeper.io/)

<!-- prettier-ignore -->
| branch | status | coverage | notes |
| ------ | ------ | -------- | ----- |
| `develop` | [![CircleCI](https://circleci.com/gh/industrieco/cancer-parser/tree/develop.svg?style=svg)](https://circleci.com/gh/industrieco/cancer-parser/tree/develop) | [![codecov](https://codecov.io/gh/industrieco/cancer-parser/branch/develop/graph/badge.svg)](https://codecov.io/gh/industrieco/cancer-parser) | Work in progress |
| `master` | [![CircleCI](https://circleci.com/gh/industrieco/cancer-parser/tree/master.svg?style=svg)](https://circleci.com/gh/industrieco/cancer-parser/tree/master) | [![codecov](https://codecov.io/gh/industrieco/cancer-parser/branch/master/graph/badge.svg)](https://codecov.io/gh/industrieco/cancer-parser) | Latest stable release |

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
