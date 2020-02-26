const db = require('../database/db-config');

module.exports = {
    find,
    add,
    findBy
}

function find(filter) {
    return db('users')
    .where({department: filter})
}

function add(user) {
    return db('users')
        .insert(user)
}

function findBy(filter) {
    return db('users')
        .where(filter);
}