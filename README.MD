# nedb-client

a very simple client for the [nedb](https://github.com/louischatriot/nedb#readme)

#### IMPORTANT

**[nedb](https://github.com/louischatriot/nedb#readme) package has been replaced with a fork of the original package, [nedb-promises](https://github.com/bajankristof/nedb-promises) to solve some vulnerability issues originating from `nedb` and use promises**

## Installation

```sh
npm install ---save @bamiot/nedb-client
```

## Usage

### create client-file for initilize database and export client.

```js
// simple and compact usage, use all default options
const NedbClient = require('nedb-client')

module.exports = new NedbClient(['user'])
```

```js
// options for client
const NedbClient = require('nedb-client')

const tables = ['user']

const options = {
  location: './db',
  disableFileExtension: true,
}

const dbClient = new NedbClient(tables, options)

module.exports = dbClient
```

```js
// options for tables
const NedbClient = require('nedb-client')

const tables = {
  user: {
    autoload: true,
    persistent: true,
  },
  message: {},
}

const options = {
  location: './db',
  disableFileExtension: true,
  defaultAutoLoad: fasle,
  defaultPersistent: false,
}

const dbClient = new NedbClient(tables, options)

module.exports = dbClient
```

### call client file

```js
const dbClient = require('./[client-file]')

dbClient.db.user.insert({ name: 'bamiot' })
```
