module.exports = function sendMail(to,cc,subject,html){
    const nodemailer = require('nodemailer');

    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "6d18481fb2dd89",
          pass: "3ac6718607633c"
        }
      });

    const message = {
        from: 'desafio@gmail.com',
        to,
        cc,
        bcc:
        subject,
        html
    }

    transport.sendMail(message, (err, res) =>{
        if(err){
            console.log(`Código não enviado: ${err}`);
        } else {
            console.log('Código enviado com sucesso!')
        }
        smtpTransport.close();
    })
}