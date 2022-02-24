const mongoose = require("mongoose")

const traveldiarySchema = new mongoose.Schema({

    username:{
        type:String
    },
    email:{
        type:String
    },
    feedback:{
        type:String
    }
})

const TraveldiaryModel = new mongoose.model("Traveldiary",traveldiarySchema)

module.exports = TraveldiaryModel