/* 
let name = fetch('https://oc-p5-api.herokuapp.com/api/teddies')
.then((response) => response.json())
.then((nounourses) => {
    for (let elem of nounourses) {
        return(elem.name);
    }
})

function afficherNounoursNameParagraphe(name) {
    var para = document.createElement("nounoursName");
    var node = document.createTextNode(document.getElementById("nounoursName").innerHTML= name);
    para.appendChild(node);
}

const { response } = require("express")
*/





function afficherNounoursNameParagraphe() {
    let json = fetch('https://oc-p5-api.herokuapp.com/api/teddies')
    .then((response) => response.json())
    for (elem in json){
        document.getElementById("nounoursName").innerHTML = "<p> Le nom du nounours est" + elem.name + "</p>"; 
        console.log("<p> Le nom du nounours est" + elem.name + "</p>");
    }
    
}

afficherNounoursNameParagraphe();