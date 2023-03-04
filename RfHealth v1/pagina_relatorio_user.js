let user_logado = []
let cadastros = []

user_logado = JSON.parse(localStorage.getItem('user_logado'))
cadastros = JSON.parse(localStorage.getItem('Cadastros'))

var relatorio_obj = 
{

    data: '',
    descricao: '',
    doutor: ''

}

function salvar_relatorio()
{

    
    let date = document.getElementById('date_relatorio')
    let descricao = document.getElementById('descricao_relatorio')
    let doutor = document.getElementById('doutor_relatorio')
    
    if( date.value === '' || descricao.value === '' || doutor.value === '' )
    {

        alert('Erro, verifique se todos os campos estão preenchidos corretamente.')

    }else
    {

        relatorio_obj.data = date.value
        relatorio_obj.descricao = descricao.value
        relatorio_obj.doutor = doutor.value
    
        for(i = 0 ; i < cadastros.length ; i++ )
        {
    
            if(cadastros[i].cadastro.cpf === user_logado.cadastro.cpf)
            {
    
                user_logado.relatorios.push(relatorio_obj)
                cadastros[i].relatorios.push(relatorio_obj)
    
                localStorage.setItem('user_logado', JSON.stringify(user_logado))
                localStorage.setItem('Cadastros', JSON.stringify(cadastros))
    
            }
    
        }
    
        window.location.href = 'pagina_informacoes_index.html'

    }


}
function sair_relatorio()
    {
    
        window.location = 'pagina_informacoes_index.html'
    
    }



