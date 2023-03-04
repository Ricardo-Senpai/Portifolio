let usuario,senha,pedirUsuario,pedirSenha
    usuario='admin'
    senha=123
    pedirUsuario=prompt('Digite o nome de usuario:')
    pedirSenha=Number(prompt('Digite a senha:'))
        if(usuario==pedirUsuario && senha===pedirSenha){
            alert('Login Efetuado!')
        }

        else if(senha!=pedirSenha && usuario===pedirUsuario){
            alert('Senha incorreta!')
        }

        else if(usuario!=pedirUsuario && senha===pedirSenha){
            alert('Usuario incorreto!')
        }

        else{
            alert('Usuario e senha incorretos!')
        }