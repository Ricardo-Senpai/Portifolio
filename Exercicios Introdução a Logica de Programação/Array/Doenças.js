// Desenvolver um programa que peça ao usuário o número de doenças a cadastrar, no qual ele deve cadastrar o nome da doença e se ela é transmitida 
// por vírus, bactéria ou por ambos. Ao final, mostrar quatro listas: doenças transmitidas por vírus, doenças transmitidas por bactérias, doenças 
// transmitidas por ambos, lista com todas doenças.

const doencaVirus=[]
const doencaBact=[]
const doencaAmbos=[]
const todasDoenca=[]

let numDoenca=Number(prompt('Quantas doenças vc quer cadastrar? '))

    for(i=0;i<numDoenca;i++){
        
        addDoencaNome=prompt('Qual o nome da doença?')
        
        todasDoenca.push(addDoencaNome)
        
        addDoencaTipo=Number(prompt('Como ela é trasnmitida?\n1-Virus\n2-Bactéria\n3-Ambos'))
       
        switch(addDoencaTipo){
            case 1:
                doencaVirus.push(addDoencaNome)
                    break
            case 2:
                doencaBact.push(addDoencaNome)
                    break
            case 3:
                doencaAmbos.push(addDoencaNome)
            break
            
            default:
                alert('Opção inválida')
                
        }
    }


alert(`Doenças trasmitidas por virús: ${doencaVirus}`)
alert(`Doenças trasmitidas por bactérias: ${doencaBact}`)
alert(`Doenças trasmitidas por ambos: ${doencaAmbos}`)
alert(`Todas as doenças: ${todasDoenca}`)