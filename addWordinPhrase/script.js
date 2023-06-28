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
    
    function insertString(str, toInsert, indexes){
        const charArray = str.split("")
        let insertCount = 0

        for(let i = 0; i <= str.length; i++){
            if(indexes.includes(i)){
                if(str[i+1] != " " || str[i] != " "){
                    charArray.splice(i + insertCount, 0, toInsert+" ")
                    insertCount++
                }else{
                    charArray.splice(i + insertCount, 0, toInsert)
                    insertCount++
                }
            }
        }

        return charArray.join("");
    }
    let completePhrase = (document.getElementById("inText").value).split(";")
    let phrase = String(completePhrase[0])
    let word = String(completePhrase[1])
    let positions = String(completePhrase[2])

    let output = insertString(phrase, word, positions)
    addElement("li", "pre", output)
})