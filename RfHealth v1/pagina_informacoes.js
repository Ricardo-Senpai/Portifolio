function sair()
{

    window.location.href = 'PagLogin.html'

}

function editar_informacoes()
{

    window.location.href = 'pagina_editar_informacoes_index.html'

}
function relatorio()
{

    window.location.href = 'pagina_relatorio_user_index.html'

}
function relatorio_historico()
{

    window.location.href = 'pagina_historico_relatorio_user_index.html'

}

let array_logado = []
let array_Cadastros = []

array_user_logado = JSON.parse(localStorage.getItem(('user_logado')))
array_Cadastros = JSON.parse(localStorage.getItem(('Cadastros')))

mostrar()
mostrar_cronicas()
cirurgias_realizada()
alergia()
deficiencias()


function mostrar()
{

    for(i = 0 ; i < array_Cadastros.length ; i++ )
    {

        if(array_Cadastros[i].cadastro.cpf === array_user_logado.cadastro.cpf)
        {

            // info_pessoal

            document.getElementById('listar_informacoes_pessoais_nome_completo').innerHTML = ` Nome: ${array_Cadastros[i].info_pessoal_user.nome_completo} `

            document.getElementById('listar_informacoes_pessoais_nascimento').innerHTML = ` Data de nascimento: ${array_Cadastros[i].info_pessoal_user.nascimento} `

            document.getElementById('listar_informacoes_pessoais_rg').innerHTML = ` RG: ${array_Cadastros[i].info_pessoal_user.rg} `

            document.getElementById('listar_informacoes_pessoais_telefone').innerHTML = ` Telefone: ${array_Cadastros[i].info_pessoal_user.telefone} `

            document.getElementById('listar_informacoes_pessoais_telefone_outro').innerHTML = ` Telefone de outro: ${array_Cadastros[i].info_pessoal_user.telefone_outro} `

            //endereço

            document.getElementById('listar_endereco_cep').innerHTML = ` CEP: ${array_Cadastros[i].endereco.cep} `

            document.getElementById('listar_endereco_pais').innerHTML = ` País: ${array_Cadastros[i].endereco.pais} `

            document.getElementById('listar_endereco_estado').innerHTML = ` Estado: ${array_Cadastros[i].endereco.estado} `

            document.getElementById('listar_endereco_cidade').innerHTML = ` Cidade: ${array_Cadastros[i].endereco.cidade} `

            document.getElementById('listar_endereco_n_casa').innerHTML = ` Nº da casa: ${array_Cadastros[i].endereco.n_casa} `

            document.getElementById('listar_endereco_complemento').innerHTML = ` Complemento: ${array_Cadastros[i].endereco.complemento} `

            // info_hospitalar

            document.getElementById('listar_informacoes_hospitalares_altura').innerHTML = ` Altura: ${array_Cadastros[i].info_hospitalar_user.altura}`

            document.getElementById('listar_informacoes_hospitalares_peso').innerHTML = ` Peso: ${array_Cadastros[i].info_hospitalar_user.peso}`

            document.getElementById('listar_informacoes_hospitalares_pode_receber_sangue').innerHTML = ` Pode receber sangue? : ${array_Cadastros[i].info_hospitalar_user.pode_reber_sangue}`

            document.getElementById('listar_informacoes_hospitalares_tipo_sanguineo').innerHTML = ` Tipo Sanguineo : ${array_Cadastros[i].info_hospitalar_user.tipo_sanguineo}`

            document.getElementById('listar_informacoes_hospitalares_doador_orgaos').innerHTML = `É doador de orgãos? ${array_Cadastros[i].info_hospitalar_user.doador_orgaos}`

            document.getElementById('listar_informacoes_hospitalares_fuma').innerHTML = ` Fuma? ${array_Cadastros[i].info_hospitalar_user.fuma}`

            document.getElementById('listar_informacoes_hospitalares_nome_do_plano').innerHTML = ` Nome do plano de saúde: ${array_Cadastros[i].info_hospitalar_user.plano_de_saude.nome_do_plano}`

            document.getElementById('listar_informacoes_hospitalares_n_cadastro').innerHTML = ` N° de cadastro do plano de saúde: ${array_Cadastros[i].info_hospitalar_user.plano_de_saude.n_cadastro}`
            
            document.getElementById('listar_informacoes_hospitalares_validade').innerHTML = ` Validade do plano de saúde: ${array_Cadastros[i].info_hospitalar_user.plano_de_saude.validade}`

        }

    }

}

function mostrar_cronicas()
{

let armazena = ''

    for(i = 0 ; i < array_Cadastros.length ; i++ )
    {

        if(array_Cadastros[i].cadastro.cpf === array_user_logado.cadastro.cpf)
        {

            for( j = 0; j < array_Cadastros[i].info_hospitalar_user.doencas_cronicas.length; j++)
            {

                armazena += (`${array_Cadastros[i].info_hospitalar_user.doencas_cronicas[j]} ;`)

            }

            document.getElementById("listar_doencas_cronicas").innerHTML = `Doenças crônicas: ${armazena}`

        }

    }

}
function cirurgias_realizada()
{

let armazena = ''

    for(i = 0 ; i < array_Cadastros.length ; i++ )
    {

        if(array_Cadastros[i].cadastro.cpf === array_user_logado.cadastro.cpf)
        {

            for( j = 0; j < array_Cadastros[i].info_hospitalar_user.cirurgias_realizadas.length; j++)
            {

                armazena += (`${array_Cadastros[i].info_hospitalar_user.cirurgias_realizadas[j]} ;`)

            }

            document.getElementById("listar_cirurgias_realizadas").innerHTML = `Cirurgias realizadas: ${armazena}`

        }

    }

}
function alergia()
{

let armazena = ''

    for(i = 0 ; i < array_Cadastros.length ; i++ )
    {

        if(array_Cadastros[i].cadastro.cpf === array_user_logado.cadastro.cpf)
        {

            for( j = 0; j < array_Cadastros[i].info_hospitalar_user.alergias.length; j++)
            {

                armazena += (`${array_Cadastros[i].info_hospitalar_user.alergias[j]} ;`)

            }

            document.getElementById("listar_alergias").innerHTML = `Alergias: ${armazena}`

        }

    }

}


function deficiencias()
{

let armazena = ''

    for(i = 0 ; i < array_Cadastros.length ; i++ )
    {

        if(array_Cadastros[i].cadastro.cpf === array_user_logado.cadastro.cpf)
        {

            for( j = 0; j < array_Cadastros[i].info_hospitalar_user.deficiencias.length; j++)
            {

                armazena += (`${array_Cadastros[i].info_hospitalar_user.deficiencias[j]} ;`)

            }

            document.getElementById("listar_deficiencias").innerHTML = `Deficiências: ${armazena}`

        }

    }

}

