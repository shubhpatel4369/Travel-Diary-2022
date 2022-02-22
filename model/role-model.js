const mongoose = require("mongoose")


//schema

let RoleSchema = new mongoose.Schema({
    roleName:{
        type:String
    },
    roleDescription:{
        type:Boolean
    }
})

//model
let RoleModel = mongoose.model("role",RoleSchema)

module.exports=RoleModel