let preto,branco

const coresPrim=[]
const coresSecun=[]
const todasCores=[]

for(i=0;i<3;i++){
    let pegarCores=prompt('Digite uma cor primária: ')
    coresPrim.push(pegarCores)
    todasCores.push(pegarCores)
}

for(i=0;i<3;i++){
    let pegarCores=prompt('Digite uma cor secundária: ')
    coresSecun.push(pegarCores)
    todasCores.push(pegarCores)
}

preto=prompt('Adicionar ao final: ')
branco=prompt('Adicionar ao inicio:')

todasCores.unshift(branco)
todasCores.push(preto)

alert(todasCores)