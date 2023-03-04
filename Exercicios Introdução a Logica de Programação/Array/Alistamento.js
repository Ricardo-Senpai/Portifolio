//Em cidades menores, o alistamento para o exército acontece esporadicamente ao longo dos anos. Criar um programa no qual pergunte ao usuário se
//houve alistamento dos anos 2000 a 2009, uma pergunta para cada ano. Se houve alistamento deve ser digitado “S” e se não houve alistamento “N”.
//Após digitar tudo, deve-se mostrar na tela o último ano que houve alistamento. Caso não tenha ocorrido alistamento, mostrar “Não houve alistamento 
//nos últimos 10 anos”

const alistamento=[]
let ultimoAlistamento=0

for(i=0;i<10;i++){
    perguntaAlistamento=prompt(`Houve alistamento no ano 200${i}?\nS ou N`).toUpperCase()
        if(perguntaAlistamento==='S'){
            alistamento.push(`200${i}`)
        }
}

    if(alistamento.length>0){
        for(i=0;i<alistamento.length;i++){
            ultimoAlistamento=alistamento[i]
        }
        alert(`O ultimo ano que houve alistamento foi ${ultimoAlistamento}`)
    }

    else{
        alert('Não houve alistamento nos últimos 10 anos')
    }