/**   
* Controller for getting user groups.
*
* @autor Filippa Jakobsson
* @version 1.0.0
*/

const fetch = require('node-fetch')

/**
 * Gets groups that the authenticated user has.
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
module.exports = async (req, res, next) => {  
    try {
        let response = await fetch('https://gitlab.com/api/v4/groups', {
            credentials: "include",
            headers: {
                Authorization: 'Bearer ' + req.user.token,
                "Access-Control-Allow-Credentials": true,
                // "Access-Control-Allow-Origin": '*'
            }
        })

        response = await response.json()
        res.send(response)
    } catch (error) {
        next(error)
    }
}