let dado = 0

//dado = { 1,2,3,4,5,6 }

function lancar_dados(){
    let numero = 1+((Math.round(Math.random()*100)%6))
    console.log(numero)
}

lancar_dados()