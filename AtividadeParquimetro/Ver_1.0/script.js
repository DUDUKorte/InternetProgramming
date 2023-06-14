//cria a função para adicionar fundos à carteira
function wallet() {

    //resgata as variáveis do html
    var inMoney = Number(document.getElementById("idMoney").value)
    var outMoney = document.getElementById("outMoney")
    var actualMoney = Number(document.getElementById("outMoney").textContent)
    //realiza o cálculo e adiciona o valor na tela
    outMoney.innerText = (actualMoney + inMoney)
}

function addTime(cost) {
    //declara variáveis
    var actualMoney = Number(document.getElementById("outMoney").textContent)
    var outMoney = document.getElementById("outMoney")
    console.log(cost)

    //switch case para cada caso, se for custo de 1 real, 1,75 etc...
    if (!(actualMoney - cost <= 0)) {
        switch (cost) {
            case 1:
                actualMoney -= cost
                timeToAdd = 30
                break
            case 1.75:
                actualMoney -= cost
                timeToAdd = 60
                break
            case 3:
                timeToAdd = 120
                actualMoney -= cost
                break
        }
        outMoney.innerText = actualMoney
    } else { //caso não tenha dinheiro suficiente na carteira
        console.log("dinheiro insuficiente")
    }
}

function timer() {

}

//cria a interação com os botoões que iniciam as funções
var btnSubmit = document.getElementById("btnSubmit")
btnSubmit.addEventListener("click", wallet)
var btnSubmitTime30 = document.getElementById("btnSubmit30")
btnSubmitTime30.addEventListener("click", function () { addTime(1) })
var btnSubmitTime60 = document.getElementById("btnSubmit60")
btnSubmitTime60.addEventListener("click", function () { addTime(1.75) })
var btnSubmitTime120 = document.getElementById("btnSubmit120")
btnSubmitTime120.addEventListener("click", function () { addTime(3) })