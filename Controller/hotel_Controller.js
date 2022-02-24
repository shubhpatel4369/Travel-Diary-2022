const HotelModel = require("../model/hotelmodel")

//add

module.exports.addHotel=function(req,res){
    let HotelName=req.body.HotelName
    let HotelAddress=req.body.HotelAddress
    let ContactNo=req.body.ContactNo
    let CityId= req.body.CityId
    let StateId=req.body.StateId


    let Hotel = new HotelModel({
        HotelName:HotelName,
        HotelAddress:HotelAddress,
        ContactNo:ContactNo,
        CityId:CityId,
        StateId:StateId
    })

    Hotel.save(function(err,data){
        if(err){
            res.json({msg:"not add",status:-1,data:err })
        }else{
            res.json({msg:"completed",status:200,data:data})
            }
        
    })
}

//list

module.exports.getAllHotel= function(req,res){

    HotelModel.find().populate("Hotel").exec(function(err,data){
        if(err){
            res.json({msg:"not found",status:-1,data:err})
        }else{
            res.json({msg:"ho gaya",status:200,data:data})
        }
    })
}

//delete

module.exports.deleteHotel = function(req,res){
    let HotelName = req.params.HotelName
//delete from role where CountryId = 1
    HotelModel.deleteOne({"_id":HotelName},function(err,data){
        if(err){
            res.json({msg:"not deleted",status:-1,data:err})

        }else{
            res.json({msg:"deleted ",status:200,data:data})
        }
    })

}

//update

module.exports.UpdateHotel = function(req,res){
    let HotelName=req.body.HotelName
    let HotelAddress=req.body.HotelAddress
    let ContactNo=req.body.ContactNo
    let CityId=req.body.CityId
    let StateId=req.body.StateId

    HotelModel.updateOne({_id:HotelName},{Hotelname:Hotelname,ContactNo:ContactNo,HotelAddress:HotelAddress},
    function(err,data){
        if(err){
            res.json({msg:"not updated",status:-1,data:err})
        }
        else{
            res.json({msg:"updated",status:200,data:data})
        }
    })
}
