
const knexfile = require('./knexfile');

const env = process.env.NODE_ENV || 'development';

const knex = require('knex')(knexfile[env]);

knex.migrate.latest().then(function (result) {
    console.log('Migration success');
    process.exit(0);
}, function (err) {
    console.log('Migration failed');
    console.log(err);
});