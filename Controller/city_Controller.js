const CityModel = require("../model/citymodel")

//add

module.exports.addCity=function(req,res){
    let CityName=req.body.CityName
    let StateId=req.body.StateId


    let City = new CityModel({
        CityName:CityName,
        StateId:StateId
    })

    City.save(function(err,data){
        if(err){
            res.json({msg:"not add",status:-1,data:err })
         } else{
                res.json({msg:"completed",status:200,data:data})
            }
        
    })
}


//list
module.exports.getAllCity= function(req,res){

    CityModel.find().populate("State").exec(function(err,data){
        if(err){
            res.json({msg:"not found",status:-1,data:err})
        }else{
            res.json({msg:"ho gaya",status:200,data:data})
        }
    })
}

//delete

module.exports.deleteCity = function(req,res){
    let CityId = req.params.CityId

    CityModel.deleteOne({"_id":CityId},function(err,data){
        if(err){
            res.json({msg:"not deleted",status:-1,data:err})

        }else{
            res.json({msg:"deleted ",status:200,data:data})
        }
    
        
    })

}

//update
module.exports.UpdateCity = function(req,res){
    
    let Cityname=req.body.Cityname
    let StateId=req.body.StateId

    CityModel.updateOne({_id:CityId},{Cityname:Cityname,StateId:StateId},
    function(err,data){
        if(err){
            res.json({msg:"not updated",status:-1,data:err})
        }
        else{
            res.json({msg:"updated",status:200,data:data})
        }
    })
}


