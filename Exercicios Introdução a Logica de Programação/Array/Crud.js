// Faça um programa que crie um vetor vazio. Esse programa deve perguntar qual opção o usuário deseja (1, 2, 3, 4, 5, 0) e as opções devem executar 
// as tarefas abaixo. Criar as mensagens e a forma de pesquisa / lista, da forma que achar melhor.

// ======== MENU ========
// 1- Cadastrar nome
// 2- Excluir um nome
// 3- Editar um nome
// 4- Pesquisar se um nome está cadastrado
// 5- Listar todos os nomes cadastrados
// 0- Sair do programa

const crud=[]
function Cadastrar(){
let pergunta=Number(prompt('1- Cadastrar nome\n2- Excluir um nome\n3- Editar um nome\n4- Pesquisar se um nome está cadastrado\n5- Listar todos os nomes cadastrados\n0- Sair do programa'))

switch(pergunta){  
    case 1:
        let pegarNome=prompt('Digite o nome que quer cadastrar: ').toUpperCase()
        crud.push(pegarNome)
        Cadastrar()
            break
    case 2:
        let excluirNome=prompt('Digite o nome que quer excluir: ').toUpperCase()
            for(i=0;i<crud.length;i++){
                if(crud[i]===excluirNome){
                    crud.splice(i,1)
                }
            }
            Cadastrar()
                break
    case 3:
        let editarNome=prompt('Digite o nome que quer editar: ').toUpperCase()
        let posicao= crud.indexOf(editarNome)
            if(posicao>=0){
                let edicao=prompt('Digite o novo nome:').toUpperCase()
                crud.splice(posicao,1,edicao)
        }
            else{
                alert('Nome inválido')
            }
        Cadastrar()
            break
    case 4:
        let pesquisarNome=prompt('Digite o nome que quer pesquisar: ').toUpperCase()
        verificacao=0
            for(i=0;i<crud.length;i++){
                if(crud[i]===pesquisarNome){
                     verificacao+=1
                    }
                }
                if(verificacao>0){
                    alert('O nome está cadastrado')
                }
                else{
                    alert('O nome não está cadastrado')
                }
                
            Cadastrar()
            break
    case 5:
            alert(crud)
            Cadastrar()
                break
    case 0:
        break
    default:
        alert('Opção inválida')
        Cadastrar()
        
        }

}

Cadastrar()