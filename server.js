const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config.js');

const server = express();

server.use(helmet()); 
server.use(express.json());

server.get('/api/project', (req, res) => {
    db('project')
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

server.get('/api/project/:id', (req, res) => {
    db('project')
      .where({ id: req.params.id })
    .then(project => {
        if (project) {
            res.json(project);
        } else {
            res.status(404).json({ message: 'Could not find project'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get project'})
    });
});

module.exports = server;