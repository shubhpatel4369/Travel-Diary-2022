const mongoose = require("mongoose")

const StateSchema = new mongoose.Schema({
    StateId:{
        type:String
    },
    StateName:{
        type:String,
        required:true
    },
    CountryId:{
      
        type:mongoose.Schema.Types.ObjectId,
        ref:"CountryId"
    }

})

const StateModel = new mongoose.model("state",StateSchema)

module.exports = StateModel