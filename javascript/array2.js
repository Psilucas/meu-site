let nome = ['Lucas', "Matheus", "Danilo"]
let telefone = [99999999,88888888,77777777]
let aluno_agenda = [nome,telefone]

function pegar_telefone(nome){
    let aluno = aluno_agenda[0]
    let telefone = aluno_agenda[1]

    if(aluno.includes(nome)){
        let indice = aluno.indexOf(nome)
        console.log(telefone[indice])
    }
    else{
        console.log("Aluno não cadastrado")
    }
}
console.log(
    `Existem ${aluno_agenda[0].length} aluno lista`
)


function exibir_agenda(){
    let aluno = aluno_agenda[0]
    let telefone = aluno_agenda[1]

    let tamanho = aluno.length

    for(posicao = 0;posicao < tamanho; posicao++){
        console.log(
            `${aluno[posicao]} : ${telefone[posicao]}`
        )
    }
}
function input(mensagem){
    const prompt = require("prompt-sync")
}
function cadastrar_agenda(){
    let aluno = aluno_agenda[0]
    let telefone = aluno_agenda[1]
    
    const prompt = require("prompt-sync")(); 
    let input = prompt("Qual o telefone do aluno?")
    aluno.push(input)
    if(aluno.includes(input)){
        input = prompt("Qual o telefone do aluno?")
        telefone.push(input)
    }
    else{
        console.log('Erro ao cadastrar')
    }
}
cadastrar_agenda()
exibir_agenda()