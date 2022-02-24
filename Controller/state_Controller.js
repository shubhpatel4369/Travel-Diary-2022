const StateModel = require("../model/statemodel")

//add post
module.exports.addState=function(req,res){
    let StateName=req.body.StateName
    let StateId=req.body.StateId
    let  CountryId=req.body.CountryId

    let State = new StateModel({
       StateName:StateName,
       StateId:StateId,
       CountryId:CountryId
    })

State.save(function(err,data){
    if(err){
             res.json({msg:"nathi malyo", status:-1, data:err})
           }else{
             res.json({msg:"mali gaya data", status:200, data:data})
                }
})

}


//list

module.exports.getAllState = function(req,res){
    StateModel.find().populate("country").exec(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"mali gai",status:200,data:data})
        }

    })
}

//delete
module.exports.deleteState = function(req,res){
    let StateId = req.params.StateId

    //delete from role where CountryId = 1
    StateModel.deleteOne({"_id":StateId},function(err,data){

        if(err){
            res.json({msg:"swr",status:-1,data:err})
        }else{
            res.json({msg:"ho gaya",status:200,data:data})
        }
    })

   }

   //update

   module.exports.UpdateState=function(req,res){
    let StateId=req.body.StateId
    let Statename=req.body.Statename
    let CountryId=req.body.CountryId

    StateModel.updateOne({_id:StateId},{Statename:Statename,StateId:StateId},
        function(err,data){
            if(err){
                res.json({msg:"nathi thayu",status:-1,data:err})
 
            }else{
                res.json({msg:"done",status:200,data:data})
            }
 
        })
    }
