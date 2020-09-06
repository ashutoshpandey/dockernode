require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.db_name,
      port: process.env.db_port,
      host: process.env.db_host,
      user: process.env.db_username,
      password: process.env.db_password
    }
  },

  testing: {
    client: 'pg',
    connection: {
      database: process.env.db_name,
      port: process.env.db_port,
      host: process.env.db_host,
      user: process.env.db_username,
      password: process.env.db_password
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: process.env.db_name,
      port: process.env.db_port,
      host: process.env.db_host,
      user: process.env.db_username,
      password: process.env.db_password
    }
  },
};