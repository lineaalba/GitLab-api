/**
 * Mongoose model Issue.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

 const mongoose = require('mongoose')

 // Catch schema to be saved in database
 const issueSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    project: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    action: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
 })
 
 // Create a model using the schema
 const Issue = mongoose.model('Issue', issueSchema)
 
 // Exports
 module.exports = Issue