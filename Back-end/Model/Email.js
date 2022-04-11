const nodemailer = require('nodemailer');
 var transporter = nodemailer.createTransport({
     host: 'gmail',
     port: 465 ,
     auth: {
       user: 'siteaurevoir@gmail.com',
       pass: 'kcuqejpibznqayyb'
     },
     tls: {
       rejectUnauthorized: false
   },
   });

   function sendMail(receiver,subject, text){
    const mailOptions = {
        from: 'Ekaly@gmail.com',
        to: receiver,
        subject: subject,
        text: text
    };
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("email sent: "+info.response);
        }
    });
}

module.exports = {
  sendMail
};
