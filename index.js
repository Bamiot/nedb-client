const DataStore = require('nedb-promises')

module.exports = class NedbClient {
  constructor(
    tables,
    {
      location = './data',
      disableFileExtension = false,
      defaultAutoLoad = true,
      defaultPersistent = true,
    }
  ) {
    this.location = location
    this.disableFileExtension = disableFileExtension
    this.defaultAutoLoad = defaultAutoLoad
    this.defaultPersistent = defaultPersistent
    this.tables = tables

    if (!Array.isArray(tables))
      Object.keys(tables).forEach(this._createDataStore)
    else tables.forEach(this._createDataStore)
  }

  _createDataStore = (tableName) => {
    this[tableName] = new DataStore({
      filename:
        this.tables[tableName]?.persistent || this.defaultPersistent
          ? `${this.location}/${tableName}${
              this.disableFileExtension && '.nedb'
            }`
          : undefined,
      autoload: this.tables[tableName]?.autoload || this.defaultAutoLoad,
    })
  }
}
