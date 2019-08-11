mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClientSchema = new Schema({
    name: String,
    country: String,
    firstContact: Date,
    emailType: String,
    sold: Boolean,
    owner: String

})

const Client = mongoose.model('Client', ClientSchema)
module.exports = Client