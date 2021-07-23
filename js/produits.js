const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('product');

function PrintPageProduct() {
    fetch(`http://localhost:3000/api/teddies/${product}`)
    .then((response) => response.json())
    .then((nounourses) => {
    //**Create html structure**//
        //Product thumb
        let div = document.getElementById("product_unit");

        //Container text, select, button
        let div2 = document.createElement("div");

            //Image
        let img = document.createElement("img");
        img.src = nounourses.imageUrl;

            //Name
        let paraName = document.createElement("p");

            //Price
        let paraPrice = document.createElement("p");

            //Description
        let para2 = document.createElement("p");
            para2.setAttribute("class","description");

            //Color choice paragraph
        let paraChoice = document.createElement("p");
        let txtChoice= document.createTextNode("Selctionnez la couleur:");
            paraChoice.setAttribute("class","txt_choice");
        paraChoice.appendChild(txtChoice)
            //Color choice select
        let choice = document.createElement("select");
        choice.appendChild(paraChoice)
        let colorChoice = nounourses.colors;
        let color ="";

            //Basket button
        let btnPanier= document.createElement("button");
            btnPanier.setAttribute("class","btn_panier");
        let basketTxt= document.createElement("p");
        let txtBtnPanier= document.createTextNode("Ajouter au panier");
        let basketIcon= document.createElement("i")
            basketIcon.setAttribute("class", "fas fa-shopping-basket")
    
        basketTxt.appendChild(txtBtnPanier)
        btnPanier.appendChild(basketTxt);
        btnPanier.appendChild(basketIcon);


        //**Loop to get color choice of product**//
        for (let i in colorChoice){
            color= colorChoice[i];
            let listElem = document.createElement("option");
            listElem.setAttribute("value",color);
            listElem.append(color);
            choice.appendChild(listElem);
        }

        //**onclick function to add elements on local storage**//
        btnPanier.onclick = function addLocal(){
            let name= nounourses.name;
            //Define var to get local storage's infos
            let verify = window.localStorage.getItem(`${name}`);
            //Verify if product is already on local storag or not
            let cartProduct
            if (!verify) {
                //If product isn't in local storage create value
                cartProduct = [];
            }
            else {
                //if product is already in, push info on same value array
                cartProduct = JSON.parse(verify);
            }
            //Get product's info from API's infos
            let price= nounourses.price/200
            let getColor = document.getElementsByTagName("select")[0];
            let colorValue = getColor.value;
            let idProduct = nounourses._id;
            //Define which info we want to get
            let cartInfos= {price, colorValue, idProduct};
            //Push info on array 
            cartProduct.push(cartInfos);
            //Push local storage values for each product
            window.localStorage.setItem(`${name}`, JSON.stringify(cartProduct));

            alert("Votre produit a bien été ajouté au panier !");
        }
        
        //**Fill HTML structure**//
        //thumb
        div.appendChild(img);

        //container text, select, button
        div.appendChild(div2);
            //text
        div2.appendChild(paraName);
        div2.appendChild(paraPrice);
        paraName.append(`${nounourses.name}`);
        paraPrice.append(`${nounourses.price/200}€`);

        div2.appendChild(para2);
        para2.append(`${nounourses.description}`);
            //select
        div2.appendChild(paraChoice)
        div2.appendChild(choice);
            //button
        div2.appendChild(btnPanier);
    })
    .catch(error => {
        console.log("Une erreur s'est produite dans l'affichage des éléments: " +error)
    })
}
PrintPageProduct()