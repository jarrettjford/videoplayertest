const io = require('socket.io')(300)

io.on('connection', socket => {
    socket.emit('send', 'start-stop')
})