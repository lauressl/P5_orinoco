const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('product');

function afficherPageProduit() {
    fetch(`https://oc-p5-api.herokuapp.com/api/teddies/${product}`)
    .then((response) => response.json())
    .then((nounourses) => {
        let div = document.getElementById("produit_unit");
        let div2 = document.createElement("div");
        div.appendChild(div2);
        let img = document.createElement("img");
        img.src = nounourses.imageUrl;
        div2.appendChild(img);
        let para = document.createElement("p");
        div2.appendChild(para);
        para.append(`${nounourses.name}  : ${nounourses.price/200}€`);
        let para2 = document.createElement("p");
        div2.appendChild(para2);
        para2.append(`${nounourses.description}`);
        let choice = document.createElement("select");
        div2.appendChild(choice);
        let colorChoice = nounourses.colors;
        let color ="";
        for (let i in colorChoice){
            color= colorChoice[i];
            let listElem = document.createElement("option");
            listElem.setAttribute("value",color);
            listElem.append(color);
            choice.appendChild(listElem);
        }
        let btnPanier= document.createElement("button");
            btnPanier.onclick = function addLocal(){
                let name= nounourses.name;
                let verify = window.localStorage.getItem(`${name}`);
                let cartProduct
                if (!verify) {
                    cartProduct = [];
                }
                else {
                    cartProduct = JSON.parse(verify);
                }
                let price= nounourses.price/200
                let getColor = document.getElementsByTagName("select")[0];
                let colorValue = getColor.value;
                let cartInfos= {price, colorValue};
                cartProduct.push(cartInfos);
                window.localStorage.setItem(`${name}`, JSON.stringify(cartProduct));
            }
        let txtBtnPanier= document.createTextNode("Ajouter au panier");
            btnPanier.appendChild(txtBtnPanier);
            div2.appendChild(btnPanier);
    })
}
afficherPageProduit()