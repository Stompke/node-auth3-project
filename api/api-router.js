const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('./users-model');

router.get('/', (req, res) => {
    res.status(200).json({ message: "made it to /api" })
})

router.get('/users', (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json({ error: "could not retrieve users" });
        })
})

router.post('/users', (req, res) => {
    let user = req.body;
    const { password } = req.body;

    const hash = bcrypt.hashSync(password, 8);
    user.password = hash;

    Users.add(user)
        .then(added => {
            res.status(200).json(added)
        })
        .catch(err => {
            res.status(500).json({ message: "Could not add user" });
        })
})

module.exports = router;