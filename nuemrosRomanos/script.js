function addElement(element = "li", idElement = "pre", text = "placehlder"){
    const newItem = document.createElement(element);
    const itemContent = document.createTextNode(text)
    newItem.appendChild(itemContent)
    const currentItem = document.getElementById(idElement)
    document.body.insertBefore(newItem, currentItem)
}

function translateRomanToDecimal(list){
    for(i = 0; i <= list.length-1; i++){
        switch(list[i]){
            case "I": 
                list[i] = 1
                break

            case "V":
                list[i] = 5
                break

            case "X":
                list[i] = 10
                break

            case "L":
                list[i] = 50
                break

            case "C":
                list[i] = 100
                break
            
            case "D":
                list[i] = 500
                break
            
            case "M":
                list[i] = 1000
                break
        }
    }
    return list
}

const frm = document.getElementById("form")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const roman = document.getElementById("inText").value

    let list_roman = roman.split("")
    let list_decimal = translateRomanToDecimal(list_roman)
    let num_count = list_decimal[0]

    for(i = 0; i <= list_decimal.length-1; i++){
        if((list_decimal[i] > list_decimal[i+1])){
            num_count += list_decimal[i+1]
        }else if(list_decimal[i] < list_decimal[i+1]){
            num_count = list_decimal[i+1] - num_count
        }else if (list_decimal[i] == list_decimal[i+1]){
            num_count += list_decimal[i+1]
        }
    }

    addElement("li", "pre", roman+ " = " +num_count)

})