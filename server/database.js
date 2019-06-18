const mongoose = require('mongoose');

const url = process.env.MONGODB_URI || 'mongodb://localhost/koa-graphql';
//mongodb+srv://dbUser:Pa$$w0rd@cluster0-5fm4p.mongodb.net/koa-graphql?retryWrites=true
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
