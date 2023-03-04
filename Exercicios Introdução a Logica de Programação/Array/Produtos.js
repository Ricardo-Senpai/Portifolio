// Faça um programa em que o usuário digite o nome de 5 produtos e seus preços (“Digite o produto” / “Digite o seu preço”) e armazene esses nomes e
//  preços em dois vetores separados. O programa deve calcular e mostrar:

// a) A quantidade de produtos com preço inferior a R$50;
// b) O nome dos produtos com preço entre R$50 e R$100;
// c) A média dos preços dos produtos com preço superior a R$100.

const produto=[]
const preco=[]
const precoMenorCinquenta=[]
const produtoCinquentaCem=[]
const precoCem=[]

let soma=0

for(i=0;i<5;i++){
    pegarproduto=prompt('Digite o nome do produto:')
    produto.push(pegarproduto)
    pegarpreco=Number(prompt('Digite o valor do produto:'))
    preco.push(pegarpreco)
        
        if(pegarpreco<50){
            precoMenorCinquenta.push(pegarpreco)
        }
        if(pegarpreco>50 && pegarpreco<100){
            produtoCinquentaCem.push(pegarproduto)
        }
        if(pegarpreco>100){
            precoCem.push(pegarpreco)
        }

}

for(i=0;i<precoCem.length;i++){
    soma+=precoCem[i]
}


alert(`A quantidade de produtos com preço menor que 50 é: ${precoMenorCinquenta.length}`)
alert(`Os produtos que tem valor entre 50 e 100 são: ${produtoCinquentaCem}`)
alert(`A média do valor dos produtos acima de 100 reais é: ${soma/precoCem.length}`)