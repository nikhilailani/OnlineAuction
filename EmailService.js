const nodemailer = require('nodemailer'); 

let mailTransporter = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
        user: 'EmailId', 
        pass: 'Password'
    } 
});

let mailDetails = { 
    from: 'vatsal@auberginesolutions.com', 
    to: 'priyanka@auberginesolutions.com,hetvi@auberginesolutions.com,vatsalprajapati27@gmail.com',
    subject: 'Test mail', 
    html: '<h1>Welcome</h1><p>This is Test Mail..Have a good day ahead.!</p>'
}; 

mailTransporter.sendMail(mailDetails, function(err, data) { 
    if(err) { 
        console.log('Error Occurs'); 
        console.log(err)
    } else { 
        console.log('Email sent successfully'); 
    } 
}); 