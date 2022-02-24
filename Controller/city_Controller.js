const CityModel = require("../model/citymodel")

//add

module.exports.addCity=function(req,res){
    let CityName=req.body.CityName
    let CityId= req.body.CityId
    let StateId=req.body.StateId


    let City = new CityModel({
        CityName:CityName,
        CityId:CityId,
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

    CityModel.find().populate("City").exec(function(err,data){
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



//delete from role where CountryId = 1
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
    let CityId=req.body.CityId
    let Cityname=req.body.Cityname
    let StateId=req.body.StateId

    CityModel.updateOne({_id:CityId},{Cityname:Cityname,CityId:CityId},
    function(err,data){
        if(err){
            res.json({msg:"not updated",status:-1,data:err})
        }
        else{
            res.json({msg:"updated",status:200,data:data})
        }
    })
}


