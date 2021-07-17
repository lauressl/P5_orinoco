function getTypeProducts (name, infos){
    for (let nounours of infos){
        //creation des élements du tableau
        let table =  document.getElementById("cart_tablebody");
        let line = document.createElement("tr");
        let cellName = document.createElement("td");
        let cellPrice = document.createElement("td");
        let cellColor = document.createElement("td");

        //remplissage du tableau
        cellName.append(name);
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
        //search products on localStorage
        let itemName=localStorage.key(i);
        //get infos of locastorage items
        const itemsInfos = JSON.parse(localStorage.getItem(`${itemName}`));
        
        if (Array.isArray(itemsInfos)) {
            getTypeProducts(itemName, itemsInfos);
            //print all same products
        }
        total+= getTotal(itemsInfos);
    }
    divSubtotal = document.getElementById("subtotal");
    divSubtotal.append(total);
}
forEachProduct();

function refreshPage(){
    localStorage.clear();
    window.location.reload();
}