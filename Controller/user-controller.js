const bcrypt = require("bcrypt")
const UserModel = require("../model/usermodel")

//add post
module.exports.addUser = function(req,res){
    let username = req.body.username
    let email =req.body.email
    let password =req.body.password
    
    let encpassword = bcrypt.hashSync(password,10)

    let role = req.body.role


    let user = new UserModel({
        username: username,
        email: email,
        password : encpassword,
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
       let paramuserId=req.body.userId
       let parampassword=req.body.password
       let paramemail=req.body.email

 UserModel.updateOne({_id:paramuserId},{parampassword:parampassword,paramemail:paramemail},
       function(err,data){
           if(err){
               res.json({msg:"nathi thayu",status:-1,data:err})

           }else{
               res.json({msg:"done",status:200,data:data})
           }

       })
   }

//login

module.exports.login = function(req,res){

    let param_email = req.body.email
    let param_password  = req.body.password 

    let isCorrect = false; 

    UserModel.findOne({email:param_email},function(err,data){
        if(data){
            let ans =  bcrypt.compareSync(param_password,data.password)
            if(ans == true){
                    isCorrect = true
            }
        }
    
        if (isCorrect == false) {
            res.json({ msg: "Invalid Credentials...", data: req.body, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Login....", data: data, status: 200 })//http status code 
        }
    })

    }



    
