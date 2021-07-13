function afficherProduitsMemeType (name, infos){
    for (let nounours of infos){
        //creation des élements du tableau
        let table =  document.getElementById("cart_tablebody");
        let line = document.createElement("tr");
        let cellName = document.createElement("td");
        let divArt = document.createElement("div");
        let cellPrice = document.createElement("td");
        let cellColor = document.createElement("td");
        let img = document.createElement("img");
        img.src = nounours.imgProduct;

        //remplissage du tableau
        cellName.append(divArt);
        divArt.append(name + img);
        cellPrice.append(nounours.price + " €");
        cellColor.append(nounours.colorValue);
        line.append(cellName, cellPrice, cellColor);
        table.append(line);
    }
}

function getTotal(infos) {
    var sum= 0;
    for (let nounours of infos){
        sum+= parseFloat(nounours.price);
    }
    return sum;
}

function forEachProduct() {
    let total = 0;
    for (var i = 0; i < localStorage.length; i++) {
        let itemName=localStorage.key(i);
        //console.log(itemName);
       
        const itemsInfos = JSON.parse(localStorage.getItem(`${itemName}`));
        //console.log(itemsInfos);
        if (Array.isArray(itemsInfos)) {
            afficherProduitsMemeType(itemName, itemsInfos);
            //affiche tous les produits commandés du meme type
        }
        total+= getTotal(itemsInfos);
    }
    divSubtotal = document.getElementById("subtotal");
    divSubtotal.append(total);
}
forEachProduct();