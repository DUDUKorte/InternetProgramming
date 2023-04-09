var nameList = ["aline","Otavio","Camila","Nareba","Jean","Julio","Julio Rodalo","Rany","Ti"]
var selector = 0

const listE1 = document.getElementById("list");
const searchField = document.getElementById("searchField");
//searchField.addEventListener("input", inputHandler);
const buttonFillter = document.getElementById("btFilter");
const buttonAddOnList = document.getElementById("btAdd");
const buttonRemover = document.getElementById("btRmv");
const buttonSelection = document.getElementById("btSlc");

buttonFillter.addEventListener("click", inputHandler);
buttonAddOnList.addEventListener("click", addOnList);
buttonSelection.addEventListener("click", selectList);
buttonRemover.addEventListener("click", removeFromList);


this.filllist();

function filllist(list = nameList){
    listE1.innerHTML = "";

    for(let i=0; i< list.length; i++){
        let listItens = document.createElement("li");
        if(i == selector){
            listItens.className = "alert alert-dark"
        }else{
            listItens.className = "alert alert-info"
        }
        listItens.innerHTML = list[i];
        listE1.appendChild(listItens);
    }
}


function inputHandler(){
    const filteredList = nameList.filter(e1 => {
        const listItens = e1.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItens.includes(searchWord)
    })
    filllist(filteredList);
}

function addOnList(){
    if((searchField.value == "") || (searchField.value == " ")){
        filllist();
    }else{
        nameList.push(searchField.value);
        filllist();
    }
}

function selectList(){
    if(selector > (nameList.length - 2)){
        selector = 0;
    }else{
        selector += 1;
    }

    filllist();
}

function removeFromList(){
    if(selector > (nameList.length - 2)){
        nameList.splice(selector, 1);
        selector -= 1;
        filllist();
    }else{
        nameList.splice(selector, 1);
        filllist();
    }
    
}