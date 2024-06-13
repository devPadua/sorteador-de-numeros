var numerosSorteados = []
let numeroSorteado = 0
const res = document.getElementById('res')
const botaoReiniciar = document.getElementById('btn-reiniciar')
res.innerHTML = 'Números Sorteados: '

function pegarNumeros(id){
    return Number(document.getElementById(id).value)
}

function sortear(){
    let quantidade = pegarNumeros('quantidade')
    let de = pegarNumeros('de')
    let ate = pegarNumeros('ate')
    botaoReiniciar.classList.replace("container__botao-desabilitado", "container__botao")
    if (numerosSorteados.length + quantidade > ate - de ){
        res.innerHTML += `<br> Não é possível sortear ${quantidade} números.`
        console.log(numerosSorteados)
    } else if (quantidade < 1){
        res.innerHTML = 'Indique uma quantidade de números válida.'
        }
            else {
                sorteio(quantidade, de, ate)
            }
}

function sorteio(quantidade, de, ate){
    for (c=0; c < quantidade; c++){
        numeroSorteado = parseInt(Math.random()*(ate-de+1)+de)
        if (numerosSorteados.includes(numeroSorteado)){
            c--
        }else{
            numerosSorteados.push(numeroSorteado)
            resultado(numeroSorteado)
        }
    }
}

function resultado(numeroSorteado){
    res.innerHTML += `${numeroSorteado} `
}

function reiniciar(){
    numerosSorteados = []
    res.innerHTML = 'Números Sorteados: '
    botaoReiniciar.classList.replace("container__botao", "container__botao-desabilitado")
    quantidade = document.getElementById('quantidade')
}

