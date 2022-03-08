const express = require('express')
const mongoose = require("mongoose")
var cors = require('cors')


const SessionController = require("./Controller/Session_Controllers")
const roleController = require("./Controller/role-Controller")
const userController = require("./Controller/user-controller")
const countryController=require("./Controller/country_Controller")
const stateController=require("./Controller/state_Controller")
const cityController= require("./Controller/city_Controller")
const hotelController=require("./Controller/hotel_Controller")
const traveldiaryController=require("./Controller/traveldiary_Controller")
const tripplanController=require("./Controller/tripplan_Controller")
const app = express()
app.use(cors())

//middle ware
app.use(express.json())//mobile --> accept json data from request and set data into body
app.use(express.urlencoded({extended:true}))//web --> accept url encoded data from request and set data into body 

//database
mongoose.connect('mongodb://localhost:27017/traveldiary',function(err){
  if(err){
    console.log("db connection fai .. .. .. ..");
    console.log(err);
  }else{
    console.log("db Connected....");
  }
})

//urls
app.get("/",function(req,res){
     res.write("welcome")
     res.end()
})

app.get("/login",SessionController.login)
app.get("/Signup",SessionController.signup)
app.post("/saveuser",SessionController.saveuser)

//role
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRoles)
app.put("/roles/:roleId",roleController.updateRoles)

//user
app.post("/users",userController.addUser)
app.get("/users",userController.getAllusers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.Updateuser)


//Country
app.post("/countries",countryController.addCountry)
app.get("/countries",countryController.getAllCountry)
app.delete("/countries/:countryId",countryController.deleteCountry)
app.put("/countries",countryController.UpdateCountry)

//State
app.post("/states",stateController.addState)
app.get("/states",stateController.getAllState)
app.delete("/states/:stateId",stateController.deleteState)
app.put("/states",stateController.UpdateState)

//city
app.post("/cities",cityController.addCity)
app.get("/cities",cityController.getAllCity)
app.delete("/cities/:cityId",cityController.deleteCity)
app.put("/cities",cityController.UpdateCity)

//hotel
app.post("/hotels",hotelController.addHotel)
app.get("/hotels",hotelController.getAllHotel)
app.delete("/hotels/:hotelId",hotelController.deleteHotel)
app.put("/hotels",hotelController.UpdateHotel)

//traveldiary
app.post("/traveldiaries",traveldiaryController.addTraveldiary)
app.get("/traveldiaries",traveldiaryController.getAllTraveldiary)
app.delete("/traveldiaries/:username",traveldiaryController.deleteTraveldiary)
app.put("/traveldiaries",traveldiaryController.UpdateTraveldiary)

//tripplan
app.post("/tripplans",tripplanController.addTripplan)
app.get("/tripplans",tripplanController.getAllTripplan)
app.delete("/tripplans/:userId",tripplanController.deleteTripplan)
app.put("/tripplans",tripplanController.UpdateTripplan)



// app.get('/', function (req, res) {
//     res.send('Login')
//   })

//app.get("/roles",usermo)


 
//server

app.listen(4000,function(){
      console.log("Server started on 4000");
  })

  