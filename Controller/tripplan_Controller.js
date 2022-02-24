const TripplanModel = require("../model/tripplanmodel")

//add

module.exports.addTripPlan = function(req,res){
    let userId = req.body.userId
    let CountryName = req.body.CountryName
    let StateName = req.body.StateName
    let HotelName = req.body.HotelName
    let Duration = req.body.Duration
    let Placestovisit = req.body.Placestovisit
    let Comment = req.body.Comment


let Tripplan = new TripplanModel({
    userId:userId,
    CountryName:CountryName,
    StateName:StateName,
    HotelName:HotelName,
    Duration:Duration,
    Placestovisit:Placestovisit,
    Comment:Comment
})

TripplanModel.save(function(req,res){
    if(err){
        res.json({msg:"not Added",status:-1,data:err})
    }else{
        res.json({msg:"done",status:200,data:data})
    }
})

}
//list

module.exports.getAllTripPlan = function(req,res){
    TripPlanModel.find().populate("user").exec(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"mali gai",status:200,data:data})
        }
    })
}

//delete

module.exports.deleteTripPlan = function(req,res){
    let StateName = req.params.StateName
    let CountryName = req.params.CountryName
    let HotelName = req.params.HotelName
    let Placestovisit = req.params.Placestovisit
    let Comment = req.params.Comment 

    //delete
    TripPlamModel.deleteOne({"_id":userId},function(err,data){

        if(err){
            res.json({msg:"swr",status:-1,data:err})
        }else{
            res.json({msg:"ho gaya",status:200,data:data})
        }
    })

   }

   //update

   module.exports.UpdateTripPlan=function(req,res){
    let Statename=req.body.Statename
    let CountryName=req.body.CountryName
    let HotelName=req.body.HotelName
    let Comment=req.body.Comment
    let Placestovisit=req.body.Placestovisit

    TripPlanModel.updateOne({_id:userId},{Statename:Statename,CountryName:CountryName,Comment:Comment,HotelName:HotelName},
        function(err,data){
            if(err){
                res.json({msg:"nathi thayu",status:-1,data:err})
 
            }else{
                res.json({msg:"done",status:200,data:data})
            }
 
        })
    }