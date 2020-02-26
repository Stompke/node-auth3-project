const db = require('../database/db-config');

module.exports = {
    find,
    add
}

function find() {
    return db('users')
}

function add(user) {
    return db('users')
        .insert(user)
}