var mongoose = require('mongoose');

mongoose.connect('mongodb://47.95.199.219:27017/firstapp', {
  useMongoClient: true
});