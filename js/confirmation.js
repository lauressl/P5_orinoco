const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

//Get URLs information from command js page
const orderId = urlParams.get('order');
const totalPrice = urlParams.get('price');

//**Create HTML confirm page command**/
function confirmCommand(){
    //Create HTML structure
    let div = document.getElementById("confirm");
    let para = document.createElement("p");
    let para2 = document.createElement("p");

    //Fill HTML structure
    div.appendChild(para);
    div.appendChild(para2)
    para.append("N° de commande : "+ orderId)
    para2.append("Prix total : " + totalPrice + "€")
}
confirmCommand()