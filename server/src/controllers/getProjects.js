/**   
* Controller for getting projects in a group.
*
* @autor Filippa Jakobsson
* @version 1.0.0
*/

const fetch = require('node-fetch')

/**
 * Gets projects that the authenticated user has in a specific group.
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
module.exports = async (req, res, next) => {  
    try {
        let response = await fetch('https://gitlab.com/api/v4/groups/' + req.headers.id + '/projects', {
            headers: {
                Authorization: 'Bearer ' + req.user.token
            }
        })
                    
        response = await response.json()
        res.send(response)
    } catch (error) {
        next(error)
    }
}