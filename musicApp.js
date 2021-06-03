const express = require('express');
const router = require('./routes/index');
const socket = require('socket.io');

const app = express();

let port = process.env.PORT || 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(require('./routes/'));

app.use(require('./routes/albums'));

app.use(require('./routes/feedback'));

app.use(require('./routes/chat'));

let server = app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});
let io = socket(server);

io.on('connection', (socket)=>{

    console.log('client connected');
    socket.on('postMessages', msg=>{

        console.log('message received', msg);
        io.emit('updateMessage', msg)
    })
})


module.exports = router;