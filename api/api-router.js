const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const restricted = require('./restricted-middleware');

const Users = require('./users-model');
const { jwtSecret } = require('../config/secrets');

router.get('/', (req, res) => {
    res.status(200).json({ message: "made it to /api" })
})

router.get('/users', restricted, (req, res) => {
    const findIt = 'sales';
    
    Users.find(req.decodedToken.department)
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json({ error: "could not retrieve users" });
        })
})

router.post('/users',   (req, res) => {
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

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({username})
        .first()
        .then(user => {
            if( user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({ 
                    message: `Welcome ${username}!`,
                    token: generateToken(user)
                })
            } else {
                res.status(401).json({ message: "Invalid Credentials" });
            }
        })
        .catch( err => {
            res.status(500).json({ error: "Could not log in" });
        })
})

module.exports = router;

function generateToken(user){
    const payload = {
        subject: user.id,
        username: user.username,
        department: user.department,
    };
    const options = {
        expiresIn: '10h'
    };

    return jwt.sign(payload, jwtSecret, options)
}