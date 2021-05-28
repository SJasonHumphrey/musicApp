const express = require('express');
const router = require('./routes/index');

const app = express();

let port = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(require('./routes/'));

app.use(require('./routes/albums'));

app.use(require('./routes/feedback'));

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});

module.exports = router;