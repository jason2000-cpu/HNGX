// const express = require('express');
// const getUser = require('./api.js');
// const app = express();

// const port = process.env.PORT || 5000;

// app.get('/api/', (req, res) => {
//     const response = getUser(req.query.slack_name, req.query.track);
//     res.json(response);
//   })

// app.listen(port, () => {
//     console.log(`Server Up and Running on http://localhost:${port}/api`);
// })

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
app.get("/api/", (req, res) => {
  const { slack_name, track } = req.query;
  if (!slack_name || !track) {
    return res
      .status(400)
      .json({ error: "Two parameters slack_name and track are required" });
  }
  res.json({
    slack_name: slack_name,
    current_day: days[new Date().getDay()],
    utc_time: new Date().toISOString().replace(/\.\d+/, ""),
    track: track,
    github_file_url: "https://github.com/jason2000-cpu/HNGX/blob/master/Stage_One/api/v1/index.js",
    github_repo_url: "https://github.com/jason2000-cpu/HNGX",
    status_code: 200,
  });
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


