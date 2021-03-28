/**
 * Mongoose model Url.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

 const mongoose = require('mongoose')

 // Url schema to be saved in database
 const urlSchema = new mongoose.Schema({
    url: {
        // TODO: validate url
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
 })
 
 // Create a model using the schema
 const Url = mongoose.model('Url', urlSchema)
 
 // Exports
 module.exports = Url