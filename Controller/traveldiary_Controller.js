const TraveldiaryModel = require("../model/traveldiarymodel")

//add

module.exports.addTraveldiary = function(req,res){
    let username=req.body.username
    let email=req.body.email
    let feedback=req.body.feedback

let Traveldiary = new TraveldiaryModel({
        username:username,
        email:email,
        feedback:feedback
})

   Traveldiary.save(function(err,data){
    if(err){
        res.json({msg:"not added",status:-1,data:err})
    }else{
        res.json({msg:"added successfully",status:200,data:data})
    }       
})    
}

//list

module.exports.getAllTraveldiary = function(req,res){
    TraveldiaryModel.find().populate("user").exec(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"mali gai",status:200,data:data})
        }
    })
}

//delete

module.exports.deleteTraveldiary = function(req,res){
    let username = req.params.username
    let feedback = req.params.feedback


    CountryModel.deleteOne({"_id":username},function(err,data){

        if(err){
            res.json({msg:"swr",status:-1,data:err})
        }else{
            res.json({msg:"ho gaya",status:200,data:data})
        }
    })

   }

   //update

   module.exports.UpdateTraveldiary=function(req,res){
    let username=req.body.username
    let email=req.body.email
    let CountryId=req.body.CountryId

    traveldiaryModel.updateOne({_id:username},{username:username,feedback:feedback},
        function(err,data){
            if(err){
                res.json({msg:"nathi thayu",status:-1,data:err})
 
            }else{
                res.json({msg:"done",status:200,data:data})
            }
 
        })
    }