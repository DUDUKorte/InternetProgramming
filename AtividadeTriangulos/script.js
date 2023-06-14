//cria a função
function triangulo(){

    //resgata as variáveis do html
    var inLadoA = document.getElementById("inLadoA")
    var inLadoB = document.getElementById("inLadoB")
    var inLadoC = document.getElementById("inLadoC")
    var tipoTri = document.getElementById("inTipoT")
    var outSN = document.getElementById("outSN")

    //pega os valores e números das variáveis
    var ladoA = Number(inLadoA.value)
    var ladoB = Number(inLadoB.value)
    var ladoC = Number(inLadoC.value)

    //verifica se um dos lados é maior que a soma dos outros 2 e verifica o tipo do triângulo
    if((ladoA > ladoB + ladoC) || (ladoB > ladoA+ladoC) || (ladoC > ladoA+ladoB) || (ladoA + ladoB + ladoC == 0)){
        tipoTri.innerText = "Este triângulo não pode ser formado"
    }else if((ladoA == ladoB && ladoA != ladoC) || (ladoA == ladoC && ladoC != ladoB) || (ladoB == ladoC && ladoB != ladoA)){
        tipoTri.innerText = "Você Montou um Triângulo isóceles"
        outSN.innerText = "Este triângulo pode ser formado"
        tipoTri.style.color = "blue"
    }else if(ladoA == ladoB && ladoA == ladoC && ladoC ==ladoB){
        tipoTri.textContent = "Você Montou um Triângulo Equilátero"
        outSN.innerText = "Este triângulo pode ser formado"
        tipoTri.style.color = "red"
    }else{
        tipoTri.innerText = "Você Montou um Triângulo Escaleno"
        outSN.innerText = "Este triângulo pode ser formado"
        tipoTri.style.color = "green"
    }
}

//cria a interação com o botão que inicia a função
var btTriangulo = document.getElementById("btResultado")
btTriangulo.addEventListener("click", triangulo)
