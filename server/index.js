var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Twit = require('twit');
var bodyParser = require('body-parser');

var twitconfig = require('./config/twitconfig');

// Setup Twitter configuration
var T = new Twit({
    consumer_key: twitconfig.consumer_key,
    consumer_secret: twitconfig.consumer_secret,
    access_token: twitconfig.access_token,
    access_token_secret: twitconfig.access_token_secret
})

var stream = T.stream('statuses/filter', { track: 'scorpion' })
    //Get real-time event driven results of the track specified


io.on('connection', function(socket) {
    T.get('search/tweets', { q: 'scorpion since:2018-07-07', count: 50 }, function(err, data, response) {
        socket.emit('initalTweets', data.statuses);
    })
    stream.on('tweet', function(tweet) {
        socket.emit('newTweet', tweet);
    })
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});

http.listen(8080, function() {
    console.log('listening on *:8080');
});