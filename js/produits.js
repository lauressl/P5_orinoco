const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('product');

function afficherPageProduit() {
    fetch(`http://localhost:3000/api/teddies/${product}`)
    .then((response) => response.json())
    .then((nounourses) => {
        let div = document.getElementById("produit_unit");
        let div2 = document.createElement("div");
        let img = document.createElement("img");
        img.src = nounourses.imageUrl;
        let para = document.createElement("p");
        let para2 = document.createElement("p");
        let choice = document.createElement("select");
        let colorChoice = nounourses.colors;
        let color ="";
        let btnPanier= document.createElement("button");
        let txtBtnPanier= document.createTextNode("Ajouter au panier");

        for (let i in colorChoice){
            color= colorChoice[i];
            let listElem = document.createElement("option");
            listElem.setAttribute("value",color);
            listElem.append(color);
            choice.appendChild(listElem);
        }

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
                let idProduct = nounourses._id;
                let imgProduct = nounourses.imageUrl;
                let cartInfos= {price, colorValue, idProduct, imgProduct};
                cartProduct.push(cartInfos);
                window.localStorage.setItem(`${name}`, JSON.stringify(cartProduct));
            }

        div.appendChild(div2);
        div2.appendChild(img);
        div2.appendChild(para);
        para.append(`${nounourses.name}  : ${nounourses.price/200}€`);
        div2.appendChild(para2);
        para2.append(`${nounourses.description}`);
        div2.appendChild(choice);
        btnPanier.appendChild(txtBtnPanier);
        div2.appendChild(btnPanier);
    })
}
afficherPageProduit()