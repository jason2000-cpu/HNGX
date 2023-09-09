const jsonString = require('./db')

function getUser (slack_name, track){
    // console.log(jsonString, "\n", slack_name, track)
    try {
        if(jsonString.slack_name === slack_name && jsonString.track === track){
            return  jsonString;
        } else {
            return { message: `User With Username ${slack_name} and Track ${track} Not Found`}
        }
    } catch(err) {
        console.log()
        return {message: `An Error Occured While Getting User : ${err}`}
    }
};

module.exports = getUser;
