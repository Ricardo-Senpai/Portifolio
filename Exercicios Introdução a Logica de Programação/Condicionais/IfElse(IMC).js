let altura,peso,imc
    altura=Number(prompt('Digite sua altura: '))
    peso=Number(prompt('Digite seu peso: '))
    imc=peso/(altura*altura)    
        if(imc<18){

            alert(`Seu IMC é: ${imc.toFixed(1)} e está abaixo da faixa ideal`)

        }
        else if(imc>25){

            alert(`Seu IMC é ${imc.toFixed(1)} e está acima da faixa ideal`)
        }
        
        else{

            alert(`Seu IMC é ${imc.toFixed(1)} e está na faixa ideal`)
        }