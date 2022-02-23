const RoleModel=require("../model/role-model")

//add
module.exports.addRole= function(req,res){
    let roleName=req.body.roleName

    let role =new RoleModel({
        roleName:roleName
    })
    role.save(function(err,data){
        if(err){
            res.json({msg:"nathi data", status:-1, data:err})
        }else{
            res.json({msg:"mali gaya data", status:200, data:data})
        }
    })
}
//list
module.exports.getAllRoles = function(req,res){

RoleModel.find(function(err,data){
    if(err){
        res.json({msg:"Something went wrong!!!",status:-1,data:err})
    }else{
        res.json({msg:"roles....",status:200,data:data
        })
    }
})
}

//delete
module.exports.deleteRoles = function(req,res){
    let roleId = req.params.roleId
    
    //delete from role where roleId = 1
    RoleModel.deleteOne({"_id":roleId},function(err,success){
     if(err){
        res.json({msg:"Something went wrong!!!",status:-1,data:err})
    }else{
        res.json({msg:"roles....",status:200,data:success})
    }
})

}

//update
module.exports.updateRoles = function(req,res){

    let roleId = req.body.roleId
    let roleName = req.body.roleName

    RoleModel.updateOne({_id:roleId},{roleName:roleName},function(err,roles){
        if(err){
            res.json({msg:"updated!!!",status:-1,data:err})
        }else{
            res.json({msg:"roles....",status:200,data:roles})
        }
    })
    }