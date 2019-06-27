const mongoose = require('mongoose');

const url = process.env.MONGODB_URI || 'mongodb://localhost/koa-graphql';
const initDB = () => {

    mongoose.connect(
        url,
        { useNewUrlParser: true }
    );

    mongoose.connection.once('open', () => {
        console.log('connected to database');
    });

};

module.exports = initDB;
