const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = Schema({
  name: String,
  race: String,
  owner: String,
  picture: String
});

const Dog = mongoose.model('Dog', dogSchema)

module.exports = Dog;