// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var fileDetailSchema = new Schema({
//    md5: String,     
    fullFileName: String,
//    size: Number,
//    dateTime: String,
//    dateTimeMS: Number
});

// the schema is useless so far
// we need to create a model using it
var FileDetail = mongoose.model('FileDetail', fileDetailSchema);

// make this available to our users in our Node applications
module.exports = FileDetail;