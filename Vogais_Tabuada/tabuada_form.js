function addElement(element = "li", idElement = "pre", text = "placehlder"){
    const newItem = document.createElement(element);
    const itemContent = document.createTextNode(text)
    newItem.appendChild(itemContent)
    const currentItem = document.getElementById(idElement)
    document.body.insertBefore(newItem, currentItem)
}

const frm = document.getElementById("form")
frm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const numero = Number(document.getElementById("inNumero").value);
    const teste = document.getElementById("teste")
    var soma = 0
    for(i = 0; i <= 10; i++){
        soma += i*numero
        addElement("li", "pre", i+ " x " + numero+ " = " + String(i*numero))
    }
    addElement("h3", "pre", "soma = " + soma)
})