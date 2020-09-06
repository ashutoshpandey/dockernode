
exports.up = function (knex) {
    console.log('Migrating...');
    return knex.schema.createTable("employees", tbl => {
        tbl.increments("id");
        tbl.text("name", 256).notNullable();
    }).then(() => {
        console.log('Table created');
    });
};

exports.down = function (knex) {

};
