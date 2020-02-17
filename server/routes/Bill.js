const express = require('express');
const Bill = express.Router();
const controllers = require('../controllers/Bill');

Bill.route('/')
  .post(controllers.add)
  .get(controllers.getAll);

Bill.route('/:id')
  .get(controllers.getById)
  .delete(controllers.delete)
  .put(controllers.update);

module.exports = Bill;