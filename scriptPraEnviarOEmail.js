function enviar(params){
    var tempParams = {
        from_name: document.getElementById('fromName').value,
        email: document.getElementById('emailDoUsuario').value,
        message: document.getElementById('msg').value
    };
    // deve ser passados 3 parametros, ID do servico de email,
    // segundo, o ID do template, terceiro, um obj com as variaveis a serem inseridas no template
    emailjs.send('service_qgmf1cp', 'template_4e44swz', tempParams).then(res =>{
        console.log('enviado', res.status)
        alert('Menssagem enviada com sucesso!')
    })
}