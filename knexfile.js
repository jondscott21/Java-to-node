// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: './dev.sqlite3',
    migrations: './data/migrations',
    seeds: './data/seeds'
  },

};
