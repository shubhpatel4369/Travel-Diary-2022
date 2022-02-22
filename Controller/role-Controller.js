const res = require("express/lib/response")
const RoleModel=require("../model/role-model")







module.exports.addRole = function(req,res){

//     //db insert role
//     console.log(req.body.roleName);
//     let role= new RoleModel({
//         roleName:req.body.roleName
//     })
// role.save(function(err,success){
//     if(err){
//         console.log(err);
//         res.json({msg:"SMW",status:-1,data:req.body})
//     }else{
//         res.json({msg:"role added",status:200,data:success})
//     }
// })

//     //db insert role
   
//     res.json({msg:"role added",status:200,data:req.body})
// }
}

module.exports.getAllRoles = function(req,res){

RoleModel.find(function(err,roles){
    if(err){
        res.json({msg:"Something went wrong!!!",status:-1,data:err})
    }else{
        res.json({msg:"roles....",status:200,data:roles})
    }
})
}

module.exports.deleteRole = function(req,res){
    let roleId = 1
    
    //delete from role where roleId = 1
    RoleModel.deleteOne({"_id":roleId})
}