/**   
* Controller for creating a webhook.
*
* @autor Filippa Jakobsson
* @version 1.0.0
*/

const fetch = require('node-fetch')

/**
 * Creates a webhook on a specific project.
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
module.exports = async (req, res, next) => {  
    try {
        let webhookExists = false 

        let response = await fetch('https://gitlab.com/api/v4/projects/' + req.headers.id + '/hooks', {
            method: 'GET',
            headers: {
                "Content-type": 'application/json',
                Authorization: 'Bearer ' + req.user.token
            }
        })
        response = await response.json()

        // If webhook exists, don't add
        for (let i = 0; i < response.length; i++) {
            if (response[i].url === 'https://protected-depths-73018.herokuapp.com/hook') {
                webhookExists = true
            }
        }
  
        // Add webhook to a project
        if (!webhookExists) {
            const body = {
                id: req.headers.id,
                issues_events: true,
                releases_events: true,
                token: req.user.token,
                url: 'https://protected-depths-73018.herokuapp.com/hook'
            }
    
            let response = await fetch('https://gitlab.com/api/v4/projects/' + req.headers.id + '/hooks', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    "Content-type": 'application/json',
                    Authorization: 'Bearer ' + req.user.token
                }
            })

            response = await response.json()
            res.send(response)
        }
    } catch (error) {
        next(error)
    }
}