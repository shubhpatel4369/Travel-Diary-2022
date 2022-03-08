const TripplanModel = require("../model/tripplanmodel")

//add

module.exports.addTripplan = function(req,res){
   // let userId = req.body.userId
    let CountryName = req.body.CountryName
    let StateName = req.body.StateName
    let HotelName = req.body.HotelName
    let Duration = req.body.Duration
    let Placestovisit = req.body.Placestovisit
    let Comment = req.body.Comment


let Tripplan = new TripplanModel({
   // userId:userId,
    CountryName:CountryName,
    StateName:StateName,
    HotelName:HotelName,
    Duration:Duration,
    Placestovisit:Placestovisit,
    Comment:Comment
})

Tripplan.save(function(err,data){
    if(err){
        res.json({msg:"not Added",status:-1,data:err})
    }else{
        res.json({msg:"done",status:200,data:data})
    }
})

}
//list

module.exports.getAllTripplan = function(req,res){
    TripplanModel.find().populate("user").exec(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"mali gai",status:200,data:data})
        }
    })
}

//delete

module.exports.deleteTripplan = function(req,res){
    // let StateName = req.params.StateName
    // let CountryName = req.params.CountryName
    let userId=req.body.userId
    // let HotelName = req.params.HotelName
    // let  Duration = req.params.Duration
    // let Placestovisit = req.params.Placestovisit
    // let Comment = req.params.Comment 

   
    TripplanModel.deleteOne({"_id":userId},function(err,data){
        // let userId = req.params.userId
        if(err){
            res.json({msg:"swr",status:-1,data:err})
        }else{
            res.json({msg:"ho gaya",status:200,data:data})
        }
    })

   }

   //update

   module.exports.UpdateTripplan=function(req,res){
    let StateName=req.body.Statename
    let userId=req.body.userId
    let CountryName=req.body.CountryName
    let HotelName=req.body.HotelName
    let Duration=req.body.Duration
    let Comment=req.body.Comment
    let Placestovisit=req.body.Placestovisit

    TripplanModel.updateOne({_id:userId},{Duration:Duration,StateName:StateName,CountryName:CountryName,Comment:Comment,HotelName:HotelName,Placestovisit:Placestovisit},
        function(err,data){
            if(err){
                res.json({msg:"nathi thayu",status:-1,data:err})
 
            }else{
                res.json({msg:"done",status:200,data:data})
            }
 
        })
    }