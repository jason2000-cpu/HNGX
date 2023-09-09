const express = require('express');

const app = express();

const port = '3000';

app.get('/api/v1', (req, res) => {
    res.send("<h1>Hello, World!</h1>")
  })

app.listen(port, () => {
    console.log(`Server Up and Running on http://localhost:${port}/api/v1`)
})

