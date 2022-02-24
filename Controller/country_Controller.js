const CountryModel = require("../model/countrymodel")

//add post
module.exports.addCountry=function(req,res){
    let CountryName=req.body.CountryName
    let CountryId=req.body.CountryId
    let latitude=req.body.latitude
    let longitude=req.body.longitude

    let country = new CountryModel({
        CountryName:CountryName,
        CountryId:CountryId,
        latitude:latitude,
        longitude:longitude

    })
    country.save(function(err,data){
        if(err){
                 res.json({msg:"nathi malyo", status:-1, data:err})
               }else{
                 res.json({msg:"mali gaya data", status:200, data:data})
                    }
    })
 
}

//list

module.exports.getAllCountry = function(req,res){
    CountryModel.find().populate("user").exec(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"mali gai",status:200,data:data})
        }

    })
}


//delete
module.exports.deleteCountry = function(req,res){
    let CountryId = req.params.CountryId

    //delete from role where CountryId = 1
    CountryModel.deleteOne({"_id":CountryId},function(err,data){

        if(err){
            res.json({msg:"swr",status:-1,data:err})
        }else{
            res.json({msg:"ho gaya",status:200,data:data})
        }
    })

   }


    //update

    module.exports.UpdateCountry=function(req,res){
        let CountryId=req.body.CountryId
        let Countryname=req.body.Countryname
        let latitude=req.body.latitude
        let longitude=req.body.longitude
 
        CountryModel.updateOne({_id:CountryId},{Countryname:Countryname,CountryId:CountryId},
        function(err,data){
            if(err){
                res.json({msg:"nathi thayu",status:-1,data:err})
 
            }else{
                res.json({msg:"done",status:200,data:data})
            }
 
        })
    }

