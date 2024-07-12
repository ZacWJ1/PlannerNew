const mongoose = require('mongoose')

const OutingSchema = new mongoose.Schema({
    outing: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
    userId: {
      type: String,
      required: true
    }
  })
    
  module.exports = mongoose.model('Outing', OutingSchema)