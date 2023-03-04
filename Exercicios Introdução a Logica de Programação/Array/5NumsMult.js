// Faça um programa que solicite ao usuário digitar 5 números e mostre a soma da multiplicação dos números pelo maior número digitado. Exemplo: 
// pegar os 4 números digitados que não são o maior e multiplicá-los individualmente pelo maior. Mostrar a soma das multiplicações.

let maiorNum=0
let somaMult=0
const nums=[]

for(i=0;i<5;i++){
    pegarNum=Number(prompt( 'Digite um numero: '))
    nums.push(pegarNum)
}

for(i=0;i<nums.length;i++){
    if(nums[i]>maiorNum){
        maiorNum=nums[i]
    }
}

for(i=0;i<nums.length;i++){
    if(nums[i]!=maiorNum){
        let mult=maiorNum*nums[i]
         somaMult+=mult
    }
}

alert(somaMult)