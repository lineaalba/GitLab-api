const fetch = require('node-fetch')

/**
 *  Sends notifications to slack
 */
const sendNotifications = async (response, url) => { 
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify({"text": '_________________________________\n' + 'NEW NOTIFICATION \n Project: ' + response.project.name + '\n Issue: '
            + response.object_attributes.title + '\n Action: ' + response.object_attributes.action + '\n Description: ' 
            + response.object_attributes.description + '\n_________________________________'}),
            headers: {
                'Content-Type': 'application/json',
            }
        })         

    } catch (error) {
        console.log(error)
    } 
}

// Exports
module.exports = sendNotifications