require('dotenv').config()
var igconfig = {}

igconfig.instagramclientid = process.env.instagramclientid
igconfig.instagramsecret = process.env.instagramsecret
igconfig.instagram_access_token = process.env.instagram_access_token

module.exports = igconfig;