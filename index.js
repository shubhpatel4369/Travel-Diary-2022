const express = require('express')
const mongoose = require("mongoose")

const SessionController = require("./Controller/Session_Controllers")
const roleController = require("./Controller/role-Controller")
const app = express()

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
     res.write("wlcome")
     res.end()
})

app.get("/login",SessionController.login)
app.get("/Signup",SessionController.signup)
app.post("/saveuser",SessionController.saveuser)

//role
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
// app.put("/roles",roleController.updateRole)



// app.get('/', function (req, res) {
//     res.send('Login')
//   })

 
//server
app.listen(3000,function(){
      console.log("Server started on 3000");
  })