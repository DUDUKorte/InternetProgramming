function addElement(element = "li", idElement = "pre", text = "placehlder"){
    const newItem = document.createElement(element);
    const itemContent = document.createTextNode(text)
    newItem.appendChild(itemContent)
    const currentItem = document.getElementById(idElement)
    document.body.insertBefore(newItem, currentItem)
}

const frm = document.getElementById("form")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const completeString = document.getElementById("inText").value
    let separate_complete_string = completeString.split(" ")
    let phrase = []
    let word = []
    check_word = false
    check_positions = false
    let positions = []

    for(i in separate_complete_string){
        if(check_word){
            word.append(i)
        }else if(check_positions){
            positions.append(i)
        }else{
            phrase.append(i)
        }

        if(i.equals(",")){
            check_word = true
        }else if(i.equals("[")){
            check_positions = true
            check_word = false
        }
    }
})
