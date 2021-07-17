const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const orderId = urlParams.get('order');
const totalPrice = urlParams.get('price');
console.log(orderId, totalPrice)

function confirmCommand(){
    let div = document.getElementById("confirm");
    let para = document.createElement("p");
    let para2 = document.createElement("p");

    div.appendChild(para);
    div.appendChild(para2)
    para.append("N° de commande: "+orderId)
    para2.append("Prix total : " +totalPrice + "€")
}

confirmCommand()