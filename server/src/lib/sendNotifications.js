// const fetch = require('node-fetch')

// /**
//  *  Sends notifications to slack
//  */
// const sendNotifications = async (response) => { 
//     try {
//             await fetch('https://hooks.slack.com/services/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', {
//                 method: 'POST',
//                 body: JSON.stringify({"text": 'New issue, { ' + response.object_attributes.title + ' }, in project { ' + response.project.name + ' }.'}),
//                 headers: {
//                     'Content-Type': 'application/json',
//                 }
//             })         

//     } catch (error) {
//         console.log(error)
//     } 
// }

// // Exports
// module.exports = sendNotifications

const fetch = require('node-fetch')
const Url = require('../models/url')

/**
 *  Sends notifications to slack
 */
const sendNotifications = async () => { 
    try {
    const urlHooks = await Url.find({})

    urlHooks.forEach(async (element) => {
        await fetch(element.url, {
            method: 'POST',
            // body: JSON.stringify({"text": 'New issue, { ' + response.object_attributes.title + ' }, in project { ' + response.project.name + ' }.'}),
            body: JSON.stringify({"text": 'testing, id' + element.id}),
            headers: {
                'Content-Type': 'application/json',
            }
        })  
    })         

    } catch (error) {
        console.log(error)
    } 
}

// Exports
module.exports = sendNotifications