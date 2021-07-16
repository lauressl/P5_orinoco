const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const orderId = urlParams.get('orderId');
const totalPrice = urlParams.get('totalPrice');

console.log(orderId, totalPrice)

function confirmCommand(){
    let div = document.getElementById("produit");
    let para = document.createElement("p");
    //let para2 = document.createElement("p");

    div.appendChild(para);
    //para.append(orderId)
    //para2.append(totalPrice)
}

confirmCommand()