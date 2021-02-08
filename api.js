const express = require('express')
// const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('./model/user')



const mongoose = require('mongoose')

const db = 'mongodb://localhost:27017/'

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })


 mongoose.connect(db,{useUnifiedTopology:true},err => {
     if(err){
        console.error('Error' + err)
    }
    else{
        console.error("Connected to db successfully")
    }
})


router.get('/', function (req, res) {
    console.log("hellooo")
    res.send("GetRequest");

})


    //-------------GET : TO FETCH FROM DATABASE---------------------
    
      // User.find({},function(err,userlist){
      //   if (err){
      //     console.log("ERROR")
      //   }
      //   else{
      //     console.log(userlist)
      //   }
      // })

      //--------POST : TO INSERT DATA------------
      // (use req.body to get data from request)


router.post('/addUser',(req,res)=>{
    console.log("POSTT INVOKED")
    const dummyData = {
        firstName: req.body.firstName,
        lastName : req.body.lastName,
        Email : req.body.Email,
        Mobile : req.body.Mobile
    }
    let u = new User(dummyData)
     u.save((error,newuser)=>{
      if(error){
           console.log(error)
         }
        else{
           console.log("SUCCESS")
           res.send("POSTED")
        }
    })


})
      // const dummyData = {
      //   firstName: "Vatsal",
      //   lastName : "Prajapati",
      //   Email : "EMailId",
      //   Mobile : "123456"

      // }
      // let u = new User(dummyData)
      // u.save((error,newuser)=>{
      //   if(error){
      //     console.log(error)
      //   }
      //   else{
      //     console.log("SUCCESS")
      //   }
      // })
     // _________________________________________________________
  
    






  
module.exports = router;
