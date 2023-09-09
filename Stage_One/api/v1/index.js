const express = require('express');
const db = require('./db.js')
const app = express();

const port = '3000';

app.get('/api/v1', (req, res) => {
    res.send(db)
  })

app.listen(port, () => {
    console.log(`Server Up and Running on http://localhost:${port}/api/v1`);
    console.log(db)
})

