const mongoose = require("mongoose")

const TripplanSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    CountryName:{
        type:String
    },
    StateName:{
        type:String
    },
    HotelName:{
        type:String
    },
    Duration:{
        type:String
    },
    Placestovisit:{
        type:String
    },
    Comment:{
        type:String
    }
})

const TripplanModel = new mongoose.model("Tripplan",TripplanSchema)

module.exports=TripplanModel