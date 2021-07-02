let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    
    if(inputAdultos.value <= 0 || inputCriancas.value <= 0 || inputDuracao.value <= 0 ){
        alert("VERIFIQUE OS DADOS ! \nNÃO É PERMITIDOS VALORES NULOS E NEGATIVOS!");
    }else{

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao))/2 * criancas;
    let qdtTotalCerveja = cervejaPP(duracao) * adultos ;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao))/2 * criancas;

    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja /355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas /2000)} Pet's 2L de Bebida</p>`

    console.log(qdtTotalCarne);

}
}

function limpar(){
    inputAdultos.value = " "
    inputCriancas.value = " "
    inputDuracao.value = " "

    resultado.innerHTML = ``
    resultado.innerHTML += ``
    resultado.innerHTML += ``

}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}
function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}
