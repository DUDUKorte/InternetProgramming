function addTime(cost) {
    //declara variáveis
    var actualMoney = Number(document.getElementById("idMoney").value)
    var outTime = document.getElementById("outTime")
    var outAlarm = document.getElementById("outAlert")

    //switch case para cada caso, se for custo de 1 real, 1,75 etc...
    if (!(actualMoney - cost < 0)) {
        switch (cost) {
            case 1:
                timeToAdd = 30
                break
            case 1.75:
                timeToAdd = 60
                break
            case 3:
                timeToAdd = 120
                break
        }
        outAlarm.className = "alert alert-danger visually-hidden"
        outTime.innerText = `Troco: ${actualMoney - cost}`
    } else { //caso não tenha dinheiro suficiente na carteira
        outAlarm.className = "alert alert-danger"
        outTime.innerText = ""
    }
}

//cria a interação com os botoões que iniciam as funções
var btnSubmitTime30 = document.getElementById("btnSubmit30")
btnSubmitTime30.addEventListener("click", function () { addTime(1) })
var btnSubmitTime60 = document.getElementById("btnSubmit60")
btnSubmitTime60.addEventListener("click", function () { addTime(1.75) })
var btnSubmitTime120 = document.getElementById("btnSubmit120")
btnSubmitTime120.addEventListener("click", function () { addTime(3) })