
exports.up = function(knex) {
    return knex.schema
        .table('users', tbl => {
            tbl.string('department', 128)
                .defaultTo('sales')
                .notNullable()
        })
};

exports.down = function(knex) {
    return knex.schema
        .table('users', tbl => {
            tbl.dropColumn('users')
        })
};
