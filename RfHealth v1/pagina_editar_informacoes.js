let array_editar_informacoes_user_logado = []
let array_editar_informacoes_Cadastros = []

array_editar_informacoes_user_logado = JSON.parse(localStorage.getItem(('user_logado')))
array_editar_informacoes_Cadastros = JSON.parse(localStorage.getItem(('Cadastros')))

let senha = document.getElementById('senha_input_edit')
let cpf = document.getElementById('cpf_edit')

let altura = document.getElementById('altura_edit')
let peso = document.getElementById('peso_edit')
let rg = document.getElementById('rg_edit')
let telefone = document.getElementById('telefone_edit')
let telefone_outro = document.getElementById('telefone_outro_edit')
let nome_completo = document.getElementById('nome_completo_input_edit')
let nascimento = document.getElementById('nascimento_input_edit')

let cep = document.getElementById('cep_edit')
let estado = document.getElementById('estado_edit')
let cidade = document.getElementById('cidade_edit')
let pais = document.getElementById('pais_edit')
let n_casa = document.getElementById('n_casa_edit')
let complemento = document.getElementById('complemento_edit')

let pode_reber_sangue = document.getElementById('pode_reber_sangue_edit')
let doador_orgaos = document.getElementById('doador_orgaos_edit')
let tipo_sanguineo = document.getElementById('tipo_sanguineo_edit')
let fuma = document.getElementById('fuma_edit')
let nome_do_plano = document.getElementById('nome_plano_edit')
let n_cadastro = document.getElementById('n_cadastro_edit')
let validade = document.getElementById('validade_edit')



function edit_cadastro()
{

    for(i = 0 ; i < array_editar_informacoes_Cadastros.length ; i++ )
    {

        if(array_editar_informacoes_Cadastros[i].cadastro.cpf === array_editar_informacoes_user_logado.cadastro.cpf)
        {

            if( senha.value != '')
            {
                    
                array_editar_informacoes_user_logado.cadastro.senha = senha.value
                array_editar_informacoes_Cadastros[i].cadastro.senha = senha.value
        
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros))   
                    
            }if( cpf.value != '')
            {
                    
                array_editar_informacoes_user_logado.cadastro.cpf = cpf.value
                array_editar_informacoes_Cadastros[i].cadastro.cpf = cpf.value
        
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros))   

            }

        }
        
    } 

}

function edit_info_pessoal_user()
{

    for(i = 0 ; i < array_editar_informacoes_Cadastros.length ; i++ )
    {

        if(array_editar_informacoes_Cadastros[i].cadastro.cpf === array_editar_informacoes_user_logado.cadastro.cpf)
        {

            if( altura.value != '')
            {

                array_editar_informacoes_user_logado.info_hospitalar_user.altura = altura.value
                array_editar_informacoes_Cadastros[i].info_hospitalar_user.altura = altura.value
        
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 

            }
            if( peso.value != '')
            {

                array_editar_informacoes_user_logado.info_hospitalar_user.peso = peso.value
                array_editar_informacoes_Cadastros[i].info_hospitalar_user.peso = peso.value
        
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 

            }
            if( rg.value != '')
            {

                array_editar_informacoes_user_logado.info_pessoal_user.rg = rg.value
                array_editar_informacoes_Cadastros[i].info_pessoal_user.rg = rg.value
        
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 

            }
            if( telefone.value != '')
            {

                array_editar_informacoes_user_logado.info_pessoal_user.telefone = telefone.value
                array_editar_informacoes_Cadastros[i].info_pessoal_user.telefone = telefone.value
        
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 

            }
            if( telefone_outro.value != '')
            {

                array_editar_informacoes_user_logado.info_pessoal_user.telefone_outro = telefone_outro.value
                array_editar_informacoes_Cadastros[i].info_pessoal_user.telefone_outro = telefone_outro.value
        
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 

            }
            if( nome_completo.value != '')
            {

                array_editar_informacoes_user_logado.info_pessoal_user.nome_completo = nome_completo.value
                array_editar_informacoes_Cadastros[i].info_pessoal_user.nome_completo = nome_completo.value
        
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 

            }
            if( nascimento.value != '')
            {

                array_editar_informacoes_user_logado.info_pessoal_user.nascimento = nascimento.value
                array_editar_informacoes_Cadastros[i].info_pessoal_user.nascimento = nascimento.value
        
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 

            }
            
        }

    }

}

function edit_endereco()
{

    for(i = 0 ; i < array_editar_informacoes_Cadastros.length ; i++ )
    {

        if(array_editar_informacoes_Cadastros[i].cadastro.cpf === array_editar_informacoes_user_logado.cadastro.cpf)
        {

            if( cep.value != '')
            {

                array_editar_informacoes_user_logado.endereco.cep = cep.value
                array_editar_informacoes_Cadastros[i].endereco.cep = cep.value
        
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 

            }
            if( estado.value != '')
            {

                array_editar_informacoes_user_logado.endereco.estado = estado.value
                array_editar_informacoes_Cadastros[i].endereco.estado = estado.value
        
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 

            }
            if( cidade.value != '')
            {

                array_editar_informacoes_user_logado.endereco.cidade = cidade.value
                array_editar_informacoes_Cadastros[i].endereco.cidade = cidade.value
        
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 

            }
            if( pais.value != '')
            {

                array_editar_informacoes_user_logado.endereco.pais = pais.value
                array_editar_informacoes_Cadastros[i].endereco.pais = pais.value
        
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 

            }
            if( n_casa.value != '')
            {

                array_editar_informacoes_user_logado.endereco.n_casa = n_casa.value
                array_editar_informacoes_Cadastros[i].endereco.n_casa = n_casa.value
        
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 

            }
            if( complemento.value != '')
            {

                array_editar_informacoes_user_logado.endereco.complemento = complemento.value
                array_editar_informacoes_Cadastros[i].endereco.complemento = complemento.value
        
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 

            }

        }
         
    }
}
function edit_info_hospitalar_user()
{

    for(i = 0 ; i < array_editar_informacoes_Cadastros.length ; i++ )
    {

        if(array_editar_informacoes_Cadastros[i].cadastro.cpf === array_editar_informacoes_user_logado.cadastro.cpf)
        {

            if( pode_reber_sangue.value != '')
            {

                array_editar_informacoes_user_logado.info_hospitalar_user.pode_reber_sangue = pode_reber_sangue.value
                array_editar_informacoes_Cadastros[i].info_hospitalar_user.pode_reber_sangue = pode_reber_sangue.value
        
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 

            }
            if( doador_orgaos.value != '')
            {

                array_editar_informacoes_user_logado.info_hospitalar_user.doador_orgaos = doador_orgaos.value
                array_editar_informacoes_Cadastros[i].info_hospitalar_user.doador_orgaos = doador_orgaos.value
        
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 

            }
            if( tipo_sanguineo.value != '')
            {

                array_editar_informacoes_user_logado.info_hospitalar_user.tipo_sanguineo = tipo_sanguineo.value
                array_editar_informacoes_Cadastros[i].info_hospitalar_user.tipo_sanguineo = tipo_sanguineo.value
        
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 

            }
            if( fuma.value != '')
            {

                array_editar_informacoes_user_logado.info_hospitalar_user.fuma = fuma.value
                array_editar_informacoes_Cadastros[i].info_hospitalar_user.fuma = fuma.value
        
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 

            }
            if( nome_do_plano.value != '')
            {

                array_editar_informacoes_user_logado.info_hospitalar_user.plano_de_saude.nome_do_plano = nome_do_plano.value
                array_editar_informacoes_Cadastros[i].info_hospitalar_user.plano_de_saude.nome_do_plano = nome_do_plano.value
        
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 

            }
            if( n_cadastro.value != '')
            {

                array_editar_informacoes_user_logado.info_hospitalar_user.plano_de_saude.n_cadastro = n_cadastro.value
                array_editar_informacoes_Cadastros[i].info_hospitalar_user.plano_de_saude.n_cadastro = n_cadastro.value
        
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 

            }
            if( validade.value != '')
            {

                array_editar_informacoes_user_logado.info_hospitalar_user.plano_de_saude.validade = validade.value
                array_editar_informacoes_Cadastros[i].info_hospitalar_user.plano_de_saude.validade = validade.value
        
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 

            }

        }

    }

}
function add_doencas_cronicas()
{

    let doencas_cronicas = document.getElementById('doencas_cronicas_edit')

    if(doencas_cronicas.value === '')
    {

        alert('Erro, verifique o campo.')

    }else
    {

        for(i = 0 ; i < array_editar_informacoes_Cadastros.length ; i++ )
        {

            if(array_editar_informacoes_Cadastros[i].cadastro.cpf === array_editar_informacoes_user_logado.cadastro.cpf)
            {
                array_editar_informacoes_user_logado.info_hospitalar_user.doencas_cronicas.push(doencas_cronicas.value)
                array_editar_informacoes_Cadastros[i].info_hospitalar_user.doencas_cronicas.push(doencas_cronicas.value)
                
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 

            }

        }

    }
}
function delete_doencas_cronicas()
{

    let doencas_cronicas = document.getElementById('doencas_cronicas_edit')

    if(doencas_cronicas.value === '')
    {

        alert('Erro, verifique o campo.')

    }else
    {

        for(i = 0 ; i < array_editar_informacoes_Cadastros.length ; i++ )
        {
    
            if(array_editar_informacoes_Cadastros[i].cadastro.cpf === array_editar_informacoes_user_logado.cadastro.cpf)
            {
    
                for(j = 0; j < array_editar_informacoes_user_logado.info_hospitalar_user.doencas_cronicas.length; j++ )
                {
    
                    if(array_editar_informacoes_user_logado.info_hospitalar_user.doencas_cronicas[j] === doencas_cronicas.value)
                    {
    
                        array_editar_informacoes_user_logado.info_hospitalar_user.doencas_cronicas.splice(j, 1,)
                        array_editar_informacoes_Cadastros[i].info_hospitalar_user.doencas_cronicas.splice(j, 1)
    
                        localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                        localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 
                    }
    
                }
    
            }
    
        }

    }


}
function add_alergias()
{

    let alergias = document.getElementById('alergias_edit')

    if(alergias.value === '')
    {

        alert('Erro, verifique o campo.')

    }else
    {

        for(i = 0 ; i < array_editar_informacoes_Cadastros.length ; i++ )
        {

            if(array_editar_informacoes_Cadastros[i].cadastro.cpf === array_editar_informacoes_user_logado.cadastro.cpf)
            {
                array_editar_informacoes_user_logado.info_hospitalar_user.alergias.push(alergias.value)
                array_editar_informacoes_Cadastros[i].info_hospitalar_user.alergias.push(alergias.value)
                
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 

            }

        }

    }
}

function delete_alergias()
{

    let alergias = document.getElementById('alergias_edit')

    if(alergias.value === '')
    {

        alert('Erro, verifique o campo.')

    }else
    {

        for(i = 0 ; i < array_editar_informacoes_Cadastros.length ; i++ )
        {
    
            if(array_editar_informacoes_Cadastros[i].cadastro.cpf === array_editar_informacoes_user_logado.cadastro.cpf)
            {
    
                for(j = 0; j < array_editar_informacoes_user_logado.info_hospitalar_user.alergias.length; j++ )
                {
    
                    if(array_editar_informacoes_user_logado.info_hospitalar_user.alergias[j] === alergias.value)
                    {
    
                        array_editar_informacoes_user_logado.info_hospitalar_user.alergias.splice(j, 1,)
                        array_editar_informacoes_Cadastros[i].info_hospitalar_user.alergias.splice(j, 1)
    
                        localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                        localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 
                    }
    
                }
    
            }
    
        }
        
    }


}
function add_cirurgias_realizadas()
{

    let cirurgias_realizadas = document.getElementById('cirurgias_realizadas_edit')

    if(cirurgias_realizadas.value === '')
    {

        alert('Erro, verifique o campo.')

    }else
    {

        for(i = 0 ; i < array_editar_informacoes_Cadastros.length ; i++ )
        {
    
            if(array_editar_informacoes_Cadastros[i].cadastro.cpf === array_editar_informacoes_user_logado.cadastro.cpf)
            {
                array_editar_informacoes_user_logado.info_hospitalar_user.cirurgias_realizadas.push(cirurgias_realizadas.value)
                array_editar_informacoes_Cadastros[i].info_hospitalar_user.cirurgias_realizadas.push(cirurgias_realizadas.value)
                
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 
    
            }
    
        }
        
    }

}
function delete_cirurgias_realizadas()
{

    let cirurgias_realizadas = document.getElementById('cirurgias_realizadas_edit')

    if(cirurgias_realizadas.value === '')
    {

        alert('Erro, verifique o campo.')

    }else
    {

        for(i = 0 ; i < array_editar_informacoes_Cadastros.length ; i++ )
        {
    
            if(array_editar_informacoes_Cadastros[i].cadastro.cpf === array_editar_informacoes_user_logado.cadastro.cpf)
            {
    
                for(j = 0; j < array_editar_informacoes_user_logado.info_hospitalar_user.cirurgias_realizadas.length; j++ )
                {
    
                    if(array_editar_informacoes_user_logado.info_hospitalar_user.cirurgias_realizadas[j] === cirurgias_realizadas.value)
                    {
    
                        array_editar_informacoes_user_logado.info_hospitalar_user.cirurgias_realizadas.splice(j, 1,)
                        array_editar_informacoes_Cadastros[i].info_hospitalar_user.cirurgias_realizadas.splice(j, 1)
    
                        localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                        localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 
                    }
    
                }
    
            }
    
        }
        
    }


}
function add_doencas_transmissiveis()
{

    let doencas_transmissiveis = document.getElementById('doencas_transmissiveis_edit')

    if(doencas_transmissiveis.value === '')
    {

        alert('Erro, verifique o campo.')

    }else
    {

        for(i = 0 ; i < array_editar_informacoes_Cadastros.length ; i++ )
        {
    
            if(array_editar_informacoes_Cadastros[i].cadastro.cpf === array_editar_informacoes_user_logado.cadastro.cpf)
            {
                array_editar_informacoes_user_logado.info_hospitalar_user.doencas_transmissiveis.push(doencas_transmissiveis.value)
                array_editar_informacoes_Cadastros[i].info_hospitalar_user.doencas_transmissiveis.push(doencas_transmissiveis.value)
                
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 
    
            }
    
        }

    }

}
function delete_doencas_transmissiveis()
{

    let doencas_transmissiveis = document.getElementById('doencas_transmissiveis_edit')

    if(doencas_transmissiveis.value === '')
    {

        alert('Erro, verifique o campo.')

    }else
    {

        for(i = 0 ; i < array_editar_informacoes_Cadastros.length ; i++ )
        {
    
            if(array_editar_informacoes_Cadastros[i].cadastro.cpf === array_editar_informacoes_user_logado.cadastro.cpf)
            {
    
                for(j = 0; j < array_editar_informacoes_user_logado.info_hospitalar_user.doencas_transmissiveis.length; j++ )
                {
    
                    if(array_editar_informacoes_user_logado.info_hospitalar_user.doencas_transmissiveis[j] === doencas_transmissiveis.value)
                    {
    
                        array_editar_informacoes_user_logado.info_hospitalar_user.doencas_transmissiveis.splice(j, 1,)
                        array_editar_informacoes_Cadastros[i].info_hospitalar_user.doencas_transmissiveis.splice(j, 1)
    
                        localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                        localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 
                    }
    
                }
    
            }
    
        }

    }


}
function add_deficiencias()
{

    let deficiencias = document.getElementById('deficiencias_edit')

    if(deficiencias.value === '')
    {

        alert('Erro, verifique o campo.')

    }else
    {

        for(i = 0 ; i < array_editar_informacoes_Cadastros.length ; i++ )
        {
    
            if(array_editar_informacoes_Cadastros[i].cadastro.cpf === array_editar_informacoes_user_logado.cadastro.cpf)
            {
                array_editar_informacoes_user_logado.info_hospitalar_user.deficiencias.push(deficiencias.value)
                array_editar_informacoes_Cadastros[i].info_hospitalar_user.deficiencias.push(deficiencias.value)
                
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 
    
            }
    
        }

    }

}
function delete_deficiencias()
{

    let deficiencias = document.getElementById('deficiencias_edit')

    if(deficiencias.value === '')
    {

        alert('Erro, verifique o campo.')

    }else
    {

        for(i = 0 ; i < array_editar_informacoes_Cadastros.length ; i++ )
        {
    
            if(array_editar_informacoes_Cadastros[i].cadastro.cpf === array_editar_informacoes_user_logado.cadastro.cpf)
            {
    
                for(j = 0; j < array_editar_informacoes_user_logado.info_hospitalar_user.deficiencias.length; j++ )
                {
    
                    if(array_editar_informacoes_user_logado.info_hospitalar_user.deficiencias[j] === deficiencias.value)
                    {
    
                        array_editar_informacoes_user_logado.info_hospitalar_user.deficiencias.splice(j, 1,)
                        array_editar_informacoes_Cadastros[i].info_hospitalar_user.deficiencias.splice(j, 1)
    
                        localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                        localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 
                    }
    
                }
    
            }
    
        }

    }

}
function add_droga()
{

    let droga = document.getElementById('droga_edit')

    if(droga.value === '')
    {

        alert('Erro, verifique o campo.')

    }else
    {

        for(i = 0 ; i < array_editar_informacoes_Cadastros.length ; i++ )
        {
    
            if(array_editar_informacoes_Cadastros[i].cadastro.cpf === array_editar_informacoes_user_logado.cadastro.cpf)
            {
                array_editar_informacoes_user_logado.info_hospitalar_user.droga.push(droga.value)
                array_editar_informacoes_Cadastros[i].info_hospitalar_user.droga.push(droga.value)
                
                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 
    
            }
    
        }
        
    }

}
function delete_droga()
{

    let droga = document.getElementById('droga_edit')

    if(droga.value === '')
    {

        alert('Erro, verifique o campo.')

    }else
    {
        
        for(i = 0 ; i < array_editar_informacoes_Cadastros.length ; i++ )
        {
    
            if(array_editar_informacoes_Cadastros[i].cadastro.cpf === array_editar_informacoes_user_logado.cadastro.cpf)
            {
    
                for(j = 0; j < array_editar_informacoes_user_logado.info_hospitalar_user.droga.length; j++ )
                {
    
                    if(array_editar_informacoes_user_logado.info_hospitalar_user.droga[j] === droga.value)
                    {
    
                        array_editar_informacoes_user_logado.info_hospitalar_user.droga.splice(j, 1,)
                        array_editar_informacoes_Cadastros[i].info_hospitalar_user.droga.splice(j, 1)
    
                        localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                        localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros)) 
                    }
    
                }
    
            }
    
        }

    }

}
function finalizar()
{

    window.location = 'pagina_informacoes_index.html'

}
function excluir_conta()
{

    let resposta = prompt("Você tem certeza que você deseja excluir a sua conta? \n\nResponda o campo com 'Sim' ou 'Não'. ").toUpperCase()

    if(resposta === 'SIM')
    {
        
        array_editar_informacoes_Cadastros = JSON.parse(localStorage.getItem(('Cadastros')))
    
        for(i = 0 ; i < array_editar_informacoes_Cadastros.length ; i++ )
        {
    
            if(array_editar_informacoes_Cadastros[i].cadastro.cpf === array_editar_informacoes_user_logado.cadastro.cpf)
            {
    
                array_editar_informacoes_Cadastros.splice(i, 1)
    
                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros))
    
            }
    
        }
    
        window.location = 'PagLogin.html'

    }else if(resposta === 'NÃO')
    {
    }
    else
    {

        alert('Resposta inválida, tente novamente.')
        excluir_conta()

    }

}

function inicia_cadastro()
{
console.log('oiii');
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

                        for(i = 0 ; i < array_editar_informacoes_Cadastros.length ; i++ )
                        {

                            if(array_editar_informacoes_Cadastros[i].cadastro.cpf === array_editar_informacoes_user_logado.cadastro.cpf)
                            {

                                array_editar_informacoes_user_logado.tag = tag
                                array_editar_informacoes_Cadastros[i].tag = tag
                        
                                localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))
                                localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros))
                                
                                alert('TAG alterada com sucesso')
                            }

                        }
                       
                        localStorage.setItem("tagSalva", tag)
                    }
                    
                }
            };
        xhttp.open("GET", url+"/rfid", true);    
        xhttp.send();

        }

        function excluir_tag()
        {

            array_editar_informacoes_Cadastros = JSON.parse(localStorage.getItem(('Cadastros')))
            array_editar_informacoes_user_logado = JSON.parse(localStorage.getItem(('user_logado')))

            for(i = 0 ; i < array_editar_informacoes_Cadastros.length ; i++ )
            {
        
                if(array_editar_informacoes_Cadastros[i].cadastro.cpf === array_editar_informacoes_user_logado.cadastro.cpf)
                {
        
                    array_editar_informacoes_Cadastros[i].tag = ''
                    array_editar_informacoes_user_logado.tag = ''
                    
                    localStorage.setItem('Cadastros', JSON.stringify(array_editar_informacoes_Cadastros))
                    localStorage.setItem('user_logado', JSON.stringify(array_editar_informacoes_user_logado))

                    alert('TAG excluída com sucesso')
        
                }
        
            }

        }
