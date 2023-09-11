const week_days= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const utcTime = new Date();
const gmtPlus1Date = new Date(utcTime.toUTCString());
const currentDay = week_days[utcTime.getDay()]
const iso = new Date(gmtPlus1Date).toISOString().slice(0, 19) + "Z";

const db = {
    slack_name: "Backend_JM",
    current_day: currentDay,
    utc_time:iso,
    track: "backend",
    github_file_url: "https://github.com/jason2000-cpu/HNGX/blob/master/Stage_One/api/v1/index.js",
    github_repo_url: "https://github.com/jason2000-cpu/HNGX",
    status_code: 200
  
}

const jsonString = db;

module.exports= jsonString;
 