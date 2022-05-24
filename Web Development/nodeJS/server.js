const express = require('express');

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.query) // most used with gets
    req.body
    req.headers
    req.params

    res.send('success')
    
})


app.listen(3000)