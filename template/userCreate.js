exports.userCreateMailTemplate= (data) =>{

    var htmlbody = "";
        htmlbody += '<div style="background-color:#000; margin-bottom:150px;">';
        htmlbody += '<div style="margin-top:150px;">';
        htmlbody += '<p style="color:#fff; font-weight:bold;margin-top:50px;">';
        htmlbody += 'Olá {name},';
        htmlbody += '</p>';
        htmlbody += '<p style="color:#fff; font-style:italic;margin-top:50px;">';
        htmlbody += 'Sua conta foi criada com sucesso!';
        htmlbody += '</p>';
        htmlbody += '<p style="color:#fff;margin-top:50px;">';
        htmlbody += 'Seu login é o seu email: {email}';
        htmlbody += '</p>';
        htmlbody += '<p style="color:#fff;margin-top:50px;">';
        htmlbody += '</p>';
        htmlbody += '</div>';
        htmlbody += '</div>';
        htmlbody = htmlbody.replace('{name}', name);
        htmlbody = htmlbody.replace('{email}', email);
        
   
}