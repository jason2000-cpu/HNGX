const current_time = new Date();

const week_days= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const db = {
    slack_name: "Backend_JM",
    current_day: week_days[current_time.getDay()],
    utc_time: current_time.toUTCString(),
    track: "backend",
    github_file_url: "https://github.com/jason2000-cpu/HNGX/blob/main/file_name.ext",
    github_repo_url: "https://github.com/jason2000-cpu/HNGX",
    status_code: 200
  
}

module.exports= db
 