// config.js
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    APP_NAME:process.env.APP_NAME,
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    APP_URL:process.env.APP_URL,

    SESS_LIFETIME: process.env.SESS_LIFETIME,
    SESS_NAME: process.env.SESS_NAME,
    SESS_SECRET: process.env.SESS_SECRET,

    SALT : 10,
    MONGO_USERNAME :process.env.MONGO_USERNAME,
    MONGO_PASSWORD :process.env.MONGO_PASSWORD,
    MONGO_HOSTNAME :process.env.MONGO_HOSTNAME,
    MONGO_PORT :process.env.MONGO_PORT,
    MONGO_DB :process.env.MONGO_DB,

    JWT_KEY:process.env.JWT_KEY
};