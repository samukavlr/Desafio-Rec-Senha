exports.userCreateMailTemplate = (data) =>{
  var mailBody = "";
        mailBody += '<div style="background-color:#000; margin-bottom:150px;">';
        mailBody = mailBody.replace('{gender}', data.gender);

        return mailBody;
}