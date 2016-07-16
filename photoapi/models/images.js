var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var tagSchema = new Schema({
  tag: String,
});
var imageSchema = new Schema({ url: String,
  thumb_url: String,
  imgUrl: String,
  order: Number,
  description: String,
  tags:[String],
  created: {type: Date, default: Date.now},
  updated: {type: Date, default: Date.now},
});


// Export the Mongoose model
module.exports = mongoose.model('Images', imageSchema);
module.exports = mongoose.model('Tags', tagSchema);
