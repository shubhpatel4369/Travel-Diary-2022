const mongoose=require("mongoose")

const CitySchema = new mongoose.Schema({
    CityId:{
        type:String
    },
    CityName:{
        type:String,
        required:true
    },
    StateId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"State"

    }
    })

    const CityModel = new mongoose.model("City",CitySchema)

    module.exports = CityModel
