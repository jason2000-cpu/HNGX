const jsonString = require('./db')

function getUser (slack_name, track){
    // console.log(jsonString, "\n", slack_name, track)
    try {
        if(jsonString.slack_name === slack_name && jsonString.track === track){
            return {status: 'Success', message: jsonString}
        } else {
            return {status: 'Error', message: `User With Username ${slack_name} and Track ${track} Not Found`}
        }
    } catch(err) {
        console.log()
        return {status: "Error", message: `An Error Occured While Getting User : ${err}`}
    }
};

module.exports = getUser;
