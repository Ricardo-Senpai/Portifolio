let nome1,idade1,nome2,idade2,nome3,idade3,nome4,idade4,nome5,idade5,mediaIdade
    
    nome1=prompt('Digite o primeiro nome:')
    
    idade1=Number(prompt('Digite a primeira idade:'))
    
    nome2=prompt('Digite o segundo nome:')
    
    idade2=Number(prompt('Digite a segunda idade:'))
    
    nome3=prompt('Digite o terceiro nome:')
    
    idade3=Number(prompt('Digite a terceira idade:'))
    
    nome4=prompt('Digite o quarto nome:')
    
    idade4=Number(prompt('Digite a quarta idade:'))
    
    nome5=prompt('Digite o quinto nome:')
    
    idade5=Number(prompt('Digite a quinta idade:'))
    
    mediaIdade=idade1+idade2+idade3+idade4+idade5/5

alert(`A media de idades é ${mediaIdade}`)
    
    if(idade1>idade2&&idade1>idade3&&idade1>idade4&&idade1>idade5){

        alert(`A maior idade é ${idade1} da pessoa ${nome1}`)
    }

    else if(idade2>idade1&&idade2>idade3&&idade2>idade4&&idade2>idade5){

        alert(`A maior idade é ${idade2} da pessoa ${nome2}`)
    }

    else if(idade3>idade1&&idade3>idade2&&idade3>idade4&&idade3>idade5){

        alert(`A maior idade é ${idade3} da pessoa ${nome3}`)
    }

    else if(idade4>idade1&&idade4>idade3&&idade4>idade3&&idade4>idade5){

        alert(`A maior idade é ${idade4} da pessoa ${nome4}`)
    }

    else {

        alert(`A maior idade é ${idade5} da pessoa ${nome5}`)
    } 