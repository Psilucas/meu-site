function lancar_dados(){
    let numero = 1+((Math.round(Math.random()*100) % 6))
    return numero
}
let dados //= lancar_dados()

//estrutura de desvio condicional / controle
function verificar_vencedor(dado){
if(dados === 6){
    console.log(`Deu $(dados), Parabéns você ganhou`)
} else if(dados === 2) {
    console.log(`Deu $(dados), Ficou perto!`)
} else{
    console.log(`Deu $(dados), Parabéns foi Longe!`)
}
}

//Estrutura de repetição

let contador = 0
while(dados !== 6){
    dados = lancar_dados()
    contador++
}
verificar_vencedor(dados)
console.log(contador)