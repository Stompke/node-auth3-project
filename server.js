const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const apiRouter = require('./api/api-router');


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api', apiRouter);


server.get('/', (req, res) => {
  res.send("It's alive!");
});


module.exports = server;


// function checkRole(role) {
//   return (req, res, next) => {
//     if(req.decodedToken && req.decodedToken.role && req.decodedToken.role.toLowerCase() === role) {
//       next();
//     } else {
//       res.status(403).json({ message: "shall not pass!" });
//     }
//   }
// }
