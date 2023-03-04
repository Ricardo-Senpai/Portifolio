let cpf = document.getElementById('cpf_input')
let senha = document.getElementById('senha_input')

    function login()
    {

      var login_get = []
      var login = false   
      var user_logado = []


        login_get = JSON.parse(localStorage.getItem('Cadastros'))

        console.log(login_get);
        

        if(cpf.value === '' || senha.value === '')
        {

            alert('Falha no login, verifique se os campos estão preenchidos corretamente.')

        }else
        {

            for(i = 0; i < login_get.length ; i++)
            {
                if (login_get[i].cadastro.cpf == cpf.value  && login_get[i].cadastro.senha == senha.value )
                {

                    login = true
                    
                    user_logado = login_get[i]
                    
                }

            }

                if(login)
                {

                    localStorage.setItem('user_logado', JSON.stringify(user_logado))

                    alert('login efetuado.')

                    window.location.href = 'pagina_informacoes_index.html'

                    cpf.value = ''
                    senha.value = ''
                    
                }else
                {
                    
                    alert('Você não possui um cadastro conosco, \npor favor efetue o seu cadastro.')
                    
                    cpf.value = ''
                    senha.value = ''

                }         
            
        }
    }

    function cadastro()
    {

        window.location.href = 'PagCad.html'

    }

    function inicia_cadastro()
    {
   
        var chamar_cad_tag = setInterval(cadastraTag, 5000)
    
    }
    
    function cadastraTag(){
    
    
    
        console.log('oi')
    
        let url = "http://192.168.43.60"
    
        //a cada 5 segundos solicita um valor da placa (estrutura: ip/rota)
        //a placa responde com um valor (this.responseText), simulando valor analogico, que é lido pela função interna
    
    
            var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {	
                    
                        var tag = this.responseText;
    
                        if(tag != " 00 00 00 00")
                        {	  

                            login_get = JSON.parse(localStorage.getItem('Cadastros'))

                            for(i = 0; i < login_get.length ; i++)
                            {
                                if ( login_get[i].tag == tag )
                                {
                
                                    login = true
                                    
                                    user_logado = login_get[i]
                                    
                                }
                
                            }
                
                                if(login)
                                {
                
                                    localStorage.setItem('user_logado', JSON.stringify(user_logado))
                
                                    alert('login efetuado')
                
                                    window.location.href = 'pagina_informacoes_index.html'
                
                                    cpf.value = ''
                                    senha.value = ''
                                    
                                }else
                                {
                                    
                                    alert('Você não possui um cadastro conosco, \npor favor efetue o seu cadastro.')
                                    
                                    cpf.value = ''
                                    senha.value = ''
                
                                }   

                            // document.getElementById("idTag").innerHTML = tag;
                            localStorage.setItem("tagSalva", tag)
                        }
                        
                    }
                };
            xhttp.open("GET", url+"/rfid", true);    
            xhttp.send();
    
            }
