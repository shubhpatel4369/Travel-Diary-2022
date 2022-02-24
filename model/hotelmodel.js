const mongoose = require("mongoose")

const hotelSchema = new mongoose.Schema({

    HotelName:{
        type:String,
        required:true
    },

    HotelAddress:{
        type:String,
        required:true
    },

    ContactNo:{
        type:String,
        required:true
    },

    StateId:{
        
        type:mongoose.Schema.Types.ObjectId,
        ref:"StateId"
    },

    CityId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CityId"
    }

})

const HotelModel = new mongoose.model("Hotel",hotelSchema)

module.exports = HotelModel