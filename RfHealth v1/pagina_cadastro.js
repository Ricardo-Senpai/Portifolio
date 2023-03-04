let pessoa_cadastro_array = []
let array_erros = []

let senha = document.getElementById('senha_input')
let altura = document.getElementById('altura')
let peso = document.getElementById('peso')
let cep = document.getElementById('cep')
let estado = document.getElementById('estado')
let cidade = document.getElementById('cidade')
let pais = document.getElementById('pais')
let n_casa = document.getElementById('n_casa')
let complemento = document.getElementById('complemento')
let telefone = document.getElementById('telefone')
let telefone_outro = document.getElementById('telefone_outro')
let pode_reber_sangue = document.getElementById('pode_reber_sangue')
let cpf = document.getElementById('cpf')
let rg = document.getElementById('rg')
let doador_orgaos = document.getElementById('doador_orgaos')
let tipo_sanguineo = document.getElementById('tipo_sanguineo')
let fuma = document.getElementById('fuma')
let nome_completo = document.getElementById('nome_completo_input')
let nascimento = document.getElementById('nascimento_input')
let nome_do_plano = document.getElementById('nome_plano')
let n_cadastro = document.getElementById('n_cadastro')
let validade = document.getElementById('validade')

        let pessoa_cadastro = 
        {

            cadastro : 
            {

                cpf : '',
                senha : ''    
                
            },

            endereco :
            {

                cep : '',
                pais : '',
                estado : '',
                cidade : '',
                n_casa : '',
                complemento : ''

            },

            info_pessoal_user :
            {

                nome_completo : '' ,
                nascimento : '',
                rg : '',
                telefone : '',
                telefone_outro : ''    

            },

            info_hospitalar_user :
            {

                altura : '',
                peso : '',
                doencas_cronicas : [],
                alergias : [],
                cirurgias_realizadas : [],
                pode_reber_sangue : '',
                tipo_sanguineo:'',
                doador_orgaos : '',
                doencas_transmissiveis : [],

                plano_de_saude : 
                {

                    nome_do_plano: '',
                    n_cadastro: '',
                    validade: ''

                },

                deficiencias : [],
                fuma: '',
                droga : []

            },

            relatorios : [],

            tag : ''


        }

    function cadastrar()
    {

        // validação se o array é nulo

        pessoa_cadastro_array = JSON.parse(localStorage.getItem('Cadastros'))

        if(pessoa_cadastro_array === null)
        {
            
            pessoa_cadastro_array = []

            fazer_cadastro()
            
        }else
        {
            
            fazer_cadastro()

        }

    }

    function fazer_cadastro()
    {

        array_erros = []

            //validações de login
            

            function validarCPF(cpf) {	
                cpf = cpf.replace(/[^\d]+/g,'');	
                if(cpf == '') return false;	
                // Elimina CPFs invalidos conhecidos	
                if (cpf.length != 11 || 
                    cpf == "00000000000" || 
                    cpf == "11111111111" || 
                    cpf == "22222222222" || 
                    cpf == "33333333333" || 
                    cpf == "44444444444" || 
                    cpf == "55555555555" || 
                    cpf == "66666666666" || 
                    cpf == "77777777777" || 
                    cpf == "88888888888" || 
                    cpf == "99999999999")
                        return false;		
                // Valida 1o digito	
                add = 0;	
                for (i=0; i < 9; i ++)		
                    add += parseInt(cpf.charAt(i)) * (10 - i);	
                    rev = 11 - (add % 11);	
                    if (rev == 10 || rev == 11)		
                        rev = 0;	
                    if (rev != parseInt(cpf.charAt(9)))		
                        return false;		
                // Valida 2o digito	
                add = 0;	
                for (i = 0; i < 10; i ++)		
                    add += parseInt(cpf.charAt(i)) * (11 - i);	
                rev = 11 - (add % 11);	
                if (rev == 10 || rev == 11)	
                    rev = 0;	
                if (rev != parseInt(cpf.charAt(10)))
                    return false;		
                return true;   
            }           

            if(validarCPF(cpf.value) == true)
            {

                pessoa_cadastro.cadastro.cpf = cpf.value

            }else
            {

                array_erros.push('CPF ')

            }

        pessoa_cadastro.cadastro.senha = senha.value

            //validações endereço

            if(cep.value.length <= 8 && cep.value != '')
            {

                pessoa_cadastro.endereco.cep = cep.value

            }else
            {

                array_erros.push('CEP ')

            }

            if(pais.value != '')
            {

                pessoa_cadastro.endereco.pais = pais.value

            }else
            {

                array_erros.push('País ')

            }

            if( estado.value != '')
            {

                pessoa_cadastro.endereco.estado = estado.value

            }else
            {

                array_erros.push('Estado ')

            }

            if( cidade.value != '')
            {

                pessoa_cadastro.endereco.cidade = cidade.value

            }else
            {

                array_erros.push('Cidade ')

            }

            if( n_casa.value != '')
            {

                pessoa_cadastro.endereco.n_casa = n_casa.value  

            }else
            {

                array_erros.push('N° da residência ')

            }

            if( complemento.value != '')
            {

                pessoa_cadastro.endereco.complemento = complemento.value  

            }else
            {

                array_erros.push('Complemento ')

            }

            //validações informações pessoais

            if( nome_completo.value != '')
            {

                pessoa_cadastro.info_pessoal_user.nome_completo = nome_completo.value

            }else
            {

                array_erros.push('Nome Completo ')

            }

            let valida_data = Date.parse(nascimento.value)

                if(isNaN(valida_data) || nascimento.value == '')
                {

                    array_erros.push('Data de nascimento ')
                    
                }else
                {

                    pessoa_cadastro.info_pessoal_user.nascimento = nascimento.value

                }

            if( rg.value != '')
            {

                pessoa_cadastro.info_pessoal_user.rg = rg.value

            }else
            {

                array_erros.push('RG ')

            }

            if( telefone.value.length < 13 || telefone.value != '')
            {

                pessoa_cadastro.info_pessoal_user.telefone = telefone.value
                
            }else
            {

                array_erros.push('Telefone ')

            }

            if( telefone_outro.value.length < 13 || telefone_outro.value != '')
            {

                pessoa_cadastro.info_pessoal_user.telefone_outro = telefone_outro.value
                
            }else
            {

                array_erros.push('Telefone de outro ')

            }

            if( altura.value != '' )
            {

                pessoa_cadastro.info_hospitalar_user.altura = altura.value

            }else
            {

                array_erros.push('Altura ')

            }

            if( peso.value != '')
            {

                pessoa_cadastro.info_hospitalar_user.peso = peso.value

            }else
            {
            
                array_erros.push('Peso ')

            }

            // validações das informações hospitalares do user

            if( pode_reber_sangue.value != '')
            {

                pessoa_cadastro.info_hospitalar_user.pode_reber_sangue = pode_reber_sangue.value

            }else
            {

                array_erros.push('Receber sangue ')

            }

            if( tipo_sanguineo.value != '')
            {

                pessoa_cadastro.info_hospitalar_user.tipo_sanguineo = tipo_sanguineo.value

            }else
            {

                array_erros.push('Tipo Sanguíneo ')

            }

            if( doador_orgaos.value != '')
            {

                pessoa_cadastro.info_hospitalar_user.doador_orgaos = doador_orgaos.value

            }else
            {

                array_erros.push('Doador de orgãos ')

            }

            if( fuma.value != '')
            {

                pessoa_cadastro.info_hospitalar_user.fuma = fuma.value

            }else
            {

                array_erros.push('Fuma ')

            }
            if(nome_do_plano.value != '')
            {

                pessoa_cadastro.info_hospitalar_user.plano_de_saude.nome_do_plano = nome_do_plano.value

            }
            if(n_cadastro.value != '')
            {

                pessoa_cadastro.info_hospitalar_user.plano_de_saude.n_cadastro = n_cadastro.value

            }
            if(validade.value != '')
            {

                pessoa_cadastro.info_hospitalar_user.plano_de_saude.validade = validade.value

            }

            if( array_erros.length == '')
            {

                pessoa_cadastro_array.push(pessoa_cadastro)
                
                localStorage.setItem('Cadastros', JSON.stringify(pessoa_cadastro_array))

                alert('Cadastro bem sucedido')

                window.location.href = 'PagLogin.html'

            }else
            {

                alert(`Erro ao se cadastrar, por favor verificar os campos abaixo: \n\n${array_erros}`)

            }
            

        }
        
        function doencasCronicas()
        {
            
            let doencas_cronicas = document.getElementById('doencas_cronicas')
    
            pessoa_cadastro.info_hospitalar_user.doencas_cronicas.push(doencas_cronicas.value)

            doencas_cronicas.value = ''

        }

       // funções para adiconar valores aos arrays do objeto

        function alergias()
        {
        
            let alergias = document.getElementById('alergias')
                        
            pessoa_cadastro.info_hospitalar_user.alergias.push(alergias.value)

            alergias.value = ''
                        
        }
                    
        function cirurgiasRealizadas()
        {
               
            let cirurgias_realizadas = document.getElementById('cirurgias_realizadas')
                        
             pessoa_cadastro.info_hospitalar_user.cirurgias_realizadas.push(cirurgias_realizadas.value)

             cirurgias_realizadas.value = ''
                        
        }
                    
        function doencasTransmissiveis()
        {
        
            let doencas_transmissiveis = document.getElementById('doencas_transmissiveis')
                        
            pessoa_cadastro.info_hospitalar_user.doencas_transmissiveis.push(doencas_transmissiveis.value)

            doencas_transmissiveis.value = ''
                        
        }
                    
        function deficiencias()
        {
        
            let deficiencias = document.getElementById('deficiencias')
                        
            pessoa_cadastro.info_hospitalar_user.deficiencias.push(deficiencias.value)

            deficiencias.value = ''
                        
        }

        function usa_droga()
        {

            let droga = document.getElementById('droga')

            pessoa_cadastro.info_hospitalar_user.droga.push(droga.value)

            droga.value = ''

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
                
                    let tag = this.responseText;

                    if(tag != " 00 00 00 00")
                    {	  
                        pessoa_cadastro.tag = tag
                        if(pessoa_cadastro.tag == tag)
                        {

                            console.log('uhuuuuuuuu')

                        }
                        // document.getElementById("idTag").innerHTML = tag;
                        localStorage.setItem("tagSalva", tag)
                    }
                    
                }
            };
        xhttp.open("GET", url+"/rfid", true);    
        xhttp.send();

        }