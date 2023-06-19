function addElement(element = "li", idElement = "pre", text = "placehlder"){
    const newItem = document.createElement(element);
    const itemContent = document.createTextNode(text)
    newItem.appendChild(itemContent)
    const currentItem = document.getElementById(idElement)
    document.body.insertBefore(newItem, currentItem)
}

function locateVogals(){
    let e = 0
    let a = 0
    let _i = 0
    let o = 0
    let u = 0

    let phrase = document.getElementById("inText").value
    let words = phrase.split(" ")
    if(words.length < 4){
        alert("É necessário informar 4 palavras ou mais")
    }else{
        for(i = 0; i < words.length; i++) {
            let j = words[i].split("")
            for(y = 0; y<=j.length; y++){
                var letter = j[y]
                //letter = letter.toLowerCase()
                switch(letter){
                    case "a" || "A": 
                        a += 1
                        break
                    case "e" || "E":
                        e += 1
                        break
                    case "i" || "I":
                        _i += 1
                        break
                    case "o" || "O":
                        o+=1
                        break
                    case "u" || "U":
                        u+=1
                        break
                }
            }
        }
        addElement("h1", "pre", "Lista de Vogais: ")
        addElement("li", "pre", "A - " + a)
        addElement("li", "pre", "E - " + e)
        addElement("li", "pre", "I - " + _i)
        addElement("li", "pre", "O - " + o)
        addElement("li", "pre", "U - " + u)
    }
    }
    
const btn = getElementById("button")
btn.addEventListener("click", locateVogals)