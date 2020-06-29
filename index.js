const express = require('express')
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/scoreboard.html');
});

app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/views/admin.html');
});


io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('scoreboard', function (data) {
        console.log('scoreboard: ' + data);

        io.emit('scoreboard', data);
    });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});