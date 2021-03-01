const express = require('express')
// const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('./model/user')
const Product = require('./model/Product')
const multer = require('multer')
let path = require('path');
const EmailService = require("./EmailService");



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
           console.log(u._id)
        }
    })


})

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'client/src/Images/');
    },
    filename: function(req, file, cb) {   
        cb(null,Date.now() + "_" + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
//let upload = multer({ storage, fileFilter });

router.post('/upload', (req, res) => {
    // 'profile_pic' is the name of our file input field in the HTML form
    let upload = multer({ storage: storage, fileFilter: fileFilter }).single('photo');

    upload(req, res, function(err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any

        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (!req.file) {
        
            return res.send('Please select an image to upload');
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }

        // Display uploaded image for user validation
        
        res.send(`You have uploaded this image: `);
        console.log(req.file.filename)

        
        const newUserData = {
                    name:req.body.name,
                    photo : req.file.filename
                }
        
        const newUser = new Product(newUserData);

        newUser.save()
        .then(() => console.log("Image ${{photo}} added succesfully"))
        .catch(err => res.status(400).json('Error: ' + err));
        
    });
});


// router.route('/upload').post(upload.single('photo'), (req, res) => {
//     const name = req.body.name;

//     const photo = req.file.filename;

//     const newUserData = {
//         name,
//         photo
//     }

//     const newUser = new Product(newUserData);

//     newUser.save()
//            .then(() => res.json('User Added'))
//            .catch(err => res.status(400).json('Error: ' + err));
// });

router.post('/addProduct', (req, res) => {
    // 'profile_pic' is the name of our file input field in the HTML form
    let upload = multer({ storage: storage, fileFilter: fileFilter }).single('image1');

    upload(req, res, function(err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any

        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (!req.file) {
        
            return res.send('Please select an image to upload');
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }

        // Display uploaded image for user validation
        
        res.send(`You have uploaded this image: `);
        console.log(req.file.filename)

        
        const newProductData = {
                    name:req.body.name,
                    category:req.body.category,
                    brand:req.body.brand,
                    minBidPrice:req.body.minBidPrice,
                    bidDate : req.body.bidDate,
                    image1 : req.file.filename
                }
        
        const newProduct = new Product(newProductData);

        newProduct.save()
        .then(() => console.log(`Image ${image1} added succesfully`))
        .catch(err => res.status(400).json('Error: ' + err));
        
    });
});

router.get('/Products', function (req, res) {
    
        Product.find({},function(err,ProductList){
            if(err){
                res.send(400)
            }
            else{
                res.send(ProductList)
                
            }
        })

})

router.post('/appenduser',(req,res) => {
    
    Product.findOneAndUpdate(
        { _id: req.body._id }, 
        { $push: { usersToNotify: req.body.id  } },
       function (error, success) {
             if (error) {
                 console.log(err);
             } else {
                 const call = EmailService.sendMail(req.body.email)
                 console.log(req.body.email)
                 console.log("User Added");

             }
         });
     

})

router.get('/active-bids', (req,res) => {
    console.log(new Date().toString())
    var d = new Date().toISOString().slice(0,10);
    
    Product.find({ "bidDate" : d } , (err,ProductList) => {
        if(err){
            console.log(err)
        }
        else{
            res.send(ProductList)
            console.log("----")
            console.log(ProductList)
            console.log("----")
        }
    })
   
})


//  Product.findOne({cond1 : req.body.cond1},(error,data)=>{
//     if(error){

//     }
//     else{
//         res.send(data)
//     }
// })




  
module.exports = router;
