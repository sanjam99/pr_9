const mongoose = require('mongoose')

var Expert = mongoose.Schema({
   expert1sent: Boolean,
   expert2sent: Boolean,
   expert3sent: Boolean,
   expert4sent: Boolean,
   expert5sent: Boolean,
   expert6sent: Boolean,
   advNo: String,
   postFor: String,
   date: Date,
   place: String,
   name1: String,
   designation1: String,
   affiliation1: String,
   contactNo1: Number,
   email1: String,
   expert1: String,
   name2: String,
   designation2: String,
   affiliation2: String,
   contactNo2: Number,
   email2: String,
   expert2: String,
   name3: String,
   designation3: String,
   affiliation3: String,
   contactNo3: Number,
   email3: String,
   expert3: String,
   name4: String,
   designation4: String,
   affiliation4: String,
   contactNo4: Number,
   email4: String,
   expert4: String,
   name5: String,
   designation5: String,
   affiliation5: String,
   contactNo5: Number,
   email5: String,
   expert5: String,
   name6: String,
   designation6: String,
   affiliation6: String,
   contactNo6: Number,
   email6: String,
   expert6: String,
})

var Expert = module.exports = mongoose.model('Expert', Expert)