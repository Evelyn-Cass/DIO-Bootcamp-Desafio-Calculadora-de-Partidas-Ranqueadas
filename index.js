function calc(win,lose){
    return win-lose
}

let victory = 340
let defeat = 250
let hero = "Eshrea"
let result = calc(victory,defeat)
let rank

console.log("Bem vindo Heróis")
console.log("Você está conectado com a Heroina "+hero+".")
console.log("Ela possui "+victory+" vitórias e "+defeat+" derrotas.")

console.log("Aguarde um momento enquanto calculamos o rank atual!")

for(let i=0;i<=5;i++){
    console.log("Carregando "+i+"/5");
}

switch(true)
{
    case (result <= 10):
        rank = "Ferro"
    break
    case (result > 10 && result <= 20):
        rank = "Bronze"
    break
    case (result > 20 && result <= 50):
        rank = "Prata"
    break
    case (result > 50 && result <= 80):
        rank = "Ouro"
    break
    case (result > 80 && result <= 90):
        rank = "Diamante"
    break
    case (result > 90 && result <= 100):
        rank = "Lendário"
    break
    case (result >= 100):
        rank = "Imortal"
    break
}

console.log("Obrigada por aguardar!")

console.log("A Heroina "+ hero +" tem o saldo de "+ result +" e está no ranque: "+ rank+"!");