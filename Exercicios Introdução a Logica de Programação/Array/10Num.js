const nums=[0,1,2,3,4,5,4,7,8,9]

let verificacao=Number(prompt('Digite o numero que vc quer verificar: '))

for(i=0;i<nums.length;i++){
    if(verificacao===nums[i]){
       alert(`O numero aparece na posição ${nums[i+1]}`)
        
    }
}