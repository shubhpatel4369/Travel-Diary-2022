const mongoose = require("mongoose")

const TripplanSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userId"
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

const TripplanModel = new mongoose.model("TripPlan",TripplanSchema)

module.exports=TripplanModel