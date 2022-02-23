const UserModel = require("../model/usermodel")

//add post
module.exports.addUser = function(req,res){
    let username = req.body.username
    let email =req.body.email
    let password =req.body.password
    let role =req.body.role

    let user = new UserModel({
        username: username,
        email: email,
        password : password,
        role : role
    })

    user.save(function(err,data){
        if(err){
            res.json({msg:"SMW",data:err,status:-1})
               }else{
            res.json({msg:"Signup done",data:data,status:200})
        }
    })

}

//list
module.exports.getAllusers = function(req,res){

UserModel.find().populate("role").exec(function(err,data){
    if(err){
        res.json({msg:"Something went wrong!!!",status:-1,data:err})
    }else{
        res.json({msg:"roles....",status:200,data:data})
    }
})

}

//delete
    module.exports.deleteUser = function(req,res){
        let userId = req.params.userId

        //delete from role where roleId = 1
        UserModel.deleteOne({"_id":userId},function(err,data){

            if(err){
                res.json({msg:"swr",status:-1,data:err})
            }else{
                res.json({msg:"ho gaya",status:200,data:data})
            }
        })
    
       }

// //update

   module.exports.Updateuser=function(req,res){
       let userId=req.body.userId
       let username=req.body.username
       let email=req.body.email

       UserModel.updateOne({_id:userId},{username:username,email:email},
       function(err,data){
           if(err){
               res.json({msg:"nathi thayu",status:-1,data:err})

           }else{
               res.json({msg:"done",status:200,data:data})
           }

       })
   }



    
