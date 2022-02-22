const moongose =require("mongoose")

const Userschema = new moongose.Schema({
    firstName:{
        type:String.apply,
        required:true
    },
    email:{
        type:String

    },
    password:{
        type:String
    },
    role:{
        type:moongose.Schema.Types.ObjectId("role")
    }
})