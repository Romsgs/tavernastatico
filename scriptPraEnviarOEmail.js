function enviar(params){
    var tempParams = {
        from_name: document.getElementById('fromName').value,
        to_name: document.getElementById('toName').value,
        message: document.getElementById('msg').value
    };
    // deve ser passados 3 parametros, ID do servico de email,
    // segundo, o ID do template, terceiro, um obj com as variaveis a serem inseridas no template
    emailjs.send('service_qgmf1cp', 'template_4e44swz', tempParams).then(res =>{
        console.log('enviado', res.status)
    })
}