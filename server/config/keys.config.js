require('dotenv').config();

module.exports = {
    mongodbUri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_KEY}@cluster0-kf9fu.mongodb.net/test?retryWrites=true&w=majority`
};