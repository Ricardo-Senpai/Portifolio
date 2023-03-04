let array_user_logado = []
let array_Cadastros = []

listar()

function listar()
{

    
    array_user_logado = JSON.parse(localStorage.getItem('user_logado'))
    array_Cadastros = JSON.parse(localStorage.getItem('Cadastros'))

    
    let armazena = ''
    
    for(i = 0 ; i < array_Cadastros.length ; i++ )
    {
        
            if(array_Cadastros[i].cadastro.cpf === array_user_logado.cadastro.cpf)
            {
                
                if(array_Cadastros[i].relatorios.length === 0)
                {
            
                    document.getElementById('listar_relatorio').innerHTML = `Não há nenhum relatório.`

                }else
                {

                    for( j = 0; j < array_Cadastros[i].relatorios.length; j++)
                    {
        
                        armazena += (`Data: ${array_Cadastros[i].relatorios[j].data} <br><br>
                        Doutor(a): ${array_Cadastros[i].relatorios[j].doutor} <br><br>Descrição: ${array_Cadastros[i].relatorios[j].descricao}<br><br><br> `)
        
                        document.getElementById('listar_relatorio').innerHTML = `Relatórios <br><br><br><br> ${armazena}`
        
                    }

                }
    
            }
    
        }

}


function sair()
{
    
    window.location = 'pagina_informacoes_index.html'
    
}
function delete_relatorio()
{

    let data_relatorios_delete = document.getElementById('data_relatorio_delete')
    let doutor_relatorios_delete = document.getElementById('doutor_relatorio_delete')

    if(data_relatorios_delete.value === '' || doutor_relatorios_delete.value === '' )
    {

        alert('Erro, verifique o campo.')

    }else
    {

        for(i = 0 ; i < array_Cadastros.length ; i++ )
        {
    
            if(array_Cadastros[i].cadastro.cpf === array_user_logado.cadastro.cpf)
            {
    
                for(j = 0; j < array_user_logado.relatorios.length; j++ )
                {
    
                    if(array_user_logado.relatorios[j].data === data_relatorios_delete.value && array_user_logado.relatorios[j].doutor === doutor_relatorios_delete.value)
                    {
    
                        array_user_logado.relatorios.splice(j, 1,)
                        array_Cadastros[i].relatorios.splice(j, 1)
    
                        localStorage.setItem('user_logado', JSON.stringify(array_user_logado))
                        localStorage.setItem('Cadastros', JSON.stringify(array_Cadastros)) 

                    }
    
                }
    
            }
    
        }

    }


    listar()
}