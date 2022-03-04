const mailer = require('nodemailer');
const nodeCron = require('node-cron');


const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iamhamid28@mailinator.com',
        pass: ''
    }
});

const scheduleEmail = (req, res) => {
    nodeCron.schedule("* 10 * * * *",function sendEmail(){
        //sending the email
        transporter.sendMail({
            from: '"Hamid" <iamhamid28@mailinator.com>',
            to: '"Hamid" <hamid.hussain@invozone.com>',
            subject: 'Account Craeted',
            text: "Your account has been created you can now make reservations."
        })
            .then(_ => {console.log()
        res.send("Email sent on " + new Date())})

            .catch(error => {console.log(error)});
    }
      )
    
}

const sendEmail = (user) => {
    transporter.sendMail({
      from: '"Hamid" <hamid.hussain@invozone.com>',
      to: `<${user.email}>`,
      subject: "Your account has been created you can now book reservations",
      text: "Account Created",
    });
};


module.exports = {
    scheduleEmail,
    sendEmail
}