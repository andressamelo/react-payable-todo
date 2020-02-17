require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/keys.config.js');
const BillRoutes = require('./routes/Bill');
const cors = require('cors');

const app = express();

mongoose.connect(config.mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('Error on connection', err));

mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());
app.use(cors());

app.use('/api/bills', BillRoutes);

const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});