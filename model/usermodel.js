const mongose =require("mongoose")

const Userschema = new mongose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String

    },
    password:{
        type:String
    },
    role:{
        type:mongose.Schema.Types.ObjectId,
        ref:"role"
      }
})
const UserModel = new mongose.model("user",Userschema)

module.exports = UserModel
