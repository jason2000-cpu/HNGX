const express = require('express');
const getUser = require('./api.js');
const app = express();

const port = process.env.PORT || 5000;

app.get('/api/v1', (req, res) => {
    const response = getUser(req.query.slack_name, req.query.track);
    res.send(JSON.stringify(response.message, null, 2))
  })

app.listen(port, () => {
    console.log(`Server Up and Running on http://localhost:${port}/api/v1`);
})


