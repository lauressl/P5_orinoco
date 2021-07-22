function getTypeProducts (name, infos){
    for (let nounours of infos){
        //Create table elements 
        let table =  document.getElementById("cart_tablebody");
        let line = document.createElement("tr");
        let cellName = document.createElement("td");
        let cellPrice = document.createElement("td");
        let cellColor = document.createElement("td");

        //Fill table with chosen elements
        cellName.append(name);
        cellPrice.append(nounours.price + " €");
        cellColor.append(nounours.colorValue);
        line.append(cellName, cellPrice, cellColor);
        table.append(line);
    }
}

//**Create fuction to get total price**//
function getTotal(infos) {
    var sum= 0;
    for (let nounours of infos){
        sum+= parseFloat(nounours.price);
    }
    return sum;
}

//**Create a local storage's loop to get elements**//
function forEachProduct() {
    let total = 0;
    for (var i = 0; i < localStorage.length; i++) {
        //Search products on localStorage by key
        let itemName=localStorage.key(i);
        //Get info of locastorage items (values)
        const itemsInfos = JSON.parse(localStorage.getItem(`${itemName}`));
        
        //Fill cart's table elements from local storage
        if (Array.isArray(itemsInfos)) {
            getTypeProducts(itemName, itemsInfos);
        }
        //Call fuction to get total price 
        total+= getTotal(itemsInfos);
    }
    //Fill the subtotal cell with subtotal value
    divSubtotal = document.getElementById("subtotal");
    divSubtotal.append(total + "€");
}
forEachProduct();

//Fuction for onclick clear cart button
function refreshPage(){
    localStorage.clear();
    window.location.reload();
}