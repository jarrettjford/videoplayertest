const socket = io('http://localhost:3000')

socket.on('send', data =>{
    console.log(data)
})