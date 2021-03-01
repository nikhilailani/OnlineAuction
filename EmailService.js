const nodemailer = require('nodemailer'); 

function sendMail(emailId){

    console.log("EEEMMMAAIL")
    console.log(emailId)

let mailTransporter = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
        user: 'vatsal@YOPmail.com', 
        pass: ' '
    } 
});

let mailDetails = { 
    from: 'vatsal@YOPmail.com', 
    to: emailId,
    subject: 'Test mail', 
    html: '<h1>Welcome to Online Auction</h1><p>thank you for participation in auction. Your aution is scheduled on --/--/--. Do not miss to bid.<br/>Now You also start working on project. Thank you</p>'
}; 

mailTransporter.sendMail(mailDetails, function(err, data) { 
    if(err) { 
        console.log('Error Occurs'); 
        console.log(err)
    } else { 
        console.log('Email sent successfully'); 
    } 
}); 
}

module.exports = { sendMail };
