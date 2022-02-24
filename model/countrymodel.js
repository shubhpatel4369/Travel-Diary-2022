const mongoose = require("mongoose")

const CountrySchema = new mongoose.Schema({
    CountryId:{
        type:String
    },
    CountryName:{
        type:String,
        required:true
    },
    latitude:{
        type:String,
        required:true
    },
    longitude:{
        type:String,
        required:true
    },

})

const CountryModel = new mongoose.model("country",CountrySchema)

module.exports = CountryModel
