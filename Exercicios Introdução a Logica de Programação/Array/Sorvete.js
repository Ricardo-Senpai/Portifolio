// Uma sorveteria possui um sistema de self-service de sorvetes no qual o cliente pode montar seu sorvete com até 4 bolas (sabores). 
// Criar um programa que simule esse sistema.

// 1- Adicionar sabor
// 2- Remover sabor
// 3- Visualizar sorvete
// 4- Finalizar pedido

// ======== MENSAGENS e VALIDAÇÕES ========
// Opção 1-> “Sabor adicionado!” OU “Limite de sabores atingido, remova um sabor!”
// Opção 2-> “Sabor removido!” OU “Não existem sabores adicionados!”
// Opção 3-> “"Camada 1 - Sabor X, Camada 2 - Sabor Y, etc.” OU “Seu sorvete não possui sabores!”
// Opção 4-> “Pedido realizado!” OU “Adicione pelo menos um sabor!”

const sabores=[]

function Atendimento(){
    let pegunta =Number(prompt('1- Adicionar sabor\n2- Remover sabor\n3- Visualizar sorvete\n4- Finalizar pedido'))

    switch(pegunta){
        case 1:
            let perguntaSabor= prompt('Qual sabor que adicionar?').toUpperCase()
             if(sabores.length<4){
                 sabores.push(perguntaSabor)
                 alert('Sabor adicionado!')
             }
             else{
                 alert('Limite de sabores atingido, remova um sabor!')
             }
             Atendimento()
                break
        case 2:
            let perguntaRemover=prompt('Qual sabor quer remover?').toUpperCase()
            for(i=0;i<sabores.length;i++){
                if(sabores[i]===perguntaRemover){
                    sabores.splice(i,1)
                    alert('Sabor removido!')
                }
            }
            if(sabores.length==0){
                alert('Não existem sabores adicionados!')
            }
            Atendimento()
                break
        case 3:
            if(sabores.length>0){
                for(i=0;i<sabores.length;i++){
                    alert(`Camada ${i+1}: Sabor ${sabores[i]}`)
                }
            }
            else{
                alert('Seu sorvete não possui sabores!')
            }

            Atendimento()
                break
        case 4:
            if(sabores.length>0){
                alert('Pedido realizado!')
            }
            else{
                alert('Adicione pelo menos um sabor!')
                Atendimento()
            }
                break
        default:
            alert('Opção inváida')
            Atendimento()
    }
}

Atendimento()