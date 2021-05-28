const mongoose = require('mongoose');
const config = require('../config.json')
const chalk = require('chalk')

const MONGO_URI = config.mongo_uri

module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family: 4
        };
        
        mongoose.connect(MONGO_URI, dbOptions);
        mongoose.set('useFindAndModify', false);
        mongoose.Promise = global.Promise;
        
        mongoose.connection.on('connected', () => {
            console.log(chalk.bold.green('Mongoose connection successfully opened!'));
        });
        
        mongoose.connection.on('err', err => {
            console.error(chalk.bold.yellow(`Mongoose connection error: \n ${err.stack}`));
        });
        
        mongoose.connection.on('disconnected', () => {
            console.log(chalk.bold.red('Mongoose connection disconnected'));
        });
    }
};