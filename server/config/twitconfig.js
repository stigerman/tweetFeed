require('dotenv').config()
var config = {}

config.consumer_key = process.env.consumer_key;
config.consumer_secret = process.env.consumer_secret;
config.access_token = process.env.access_token;
config.access_token_secret = process.env.access_token_secret;

module.exports = config;