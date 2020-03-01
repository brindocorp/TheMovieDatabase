const mongoose = require('mongoose');
const data = require('./config')

const config = require('../config/app')
// console.log(config)
const MONGO_USERNAME = config.MONGO_USERNAME;
const MONGO_PASSWORD = config.MONGO_PASSWORD;
const MONGO_HOSTNAME = config.MONGO_HOSTNAME;
const MONGO_PORT = config.MONGO_PORT;
const MONGO_DB = config.MONGO_DB;
// console.log(config)
const url = `mongodb://${MONGO_HOSTNAME}/${MONGO_DB}`
module.exports = mongoose.connect(url, {
    useNewUrlParser: true,useCreateIndex: true, useUnifiedTopology:true
})
.then(()=>console.log("DB Connected success"))
.catch(error=>console.log(error));
