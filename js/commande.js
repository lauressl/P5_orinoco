//**Get ID product**//
//Define function how to get ID
function getId(infos) {
    for (let product of infos){
        id = product.idProduct;
    }
    return id;
}

//Loop in local storage to get id's products
function getProductId() {
  //Define array
  let productsId =[];
  for (var i = 0; i < localStorage.length; i++) {
      //Search products on localStorage by key
      let itemName=localStorage.key(i);

      //Get infos of locastorage items (values)
      const itemsInfos = JSON.parse(localStorage.getItem(`${itemName}`));

      //Push each productId in array
      productsId.push(getId(itemsInfos));
  }
  return productsId;
}

//**Form validation**//
//Get html tag information
let firstNameInput = document.getElementById("firstName")
let lastNameInput = document.getElementById("lastName")
let mailInput = document.getElementById("email")
let addressInput = document.getElementById("address")
let cityInput = document.getElementById("city")

//Create function to validate form input info
function validate() {
  //Check validity of input's form information by pattern
  let checkfirstName = firstNameInput.checkValidity()
  let checklastName = lastNameInput.checkValidity()
  let checkmail = mailInput.checkValidity()
  let checkaddress = addressInput.checkValidity()
  let checkcity = cityInput.checkValidity()
  //console.log(checkaddress, checkcity, checkfirstName,checklastName,checkmail)

  //Get values of input customer information on textarea
  let firstName = firstNameInput.value
  let lastName = lastNameInput.value
  let email = mailInput.value
  let address = addressInput.value
  let city = cityInput.value

  //Return information only if check validity is ok 
  if (checkfirstName == true && checklastName == true && checkmail== true && checkaddress == true && checkcity == true){
    return {firstName, lastName, email, address, city}
  }
}

//**Create function to send data's form to API and get command information to confirm command**//
function sendData() {
  //Call validate function to get customer information
  let form = validate()
  //If there's an issue with form, don't send infos to API
  if (!form){
    return
  }

  //Get product ID
  let idProduct = getProductId();

  //Call API
  fetch("http://localhost:3000/api/teddies/order", {
    method: "POST",
    //Convert info to send on API
    body: JSON.stringify({
      "contact":
          form
      ,
      "products":
        idProduct
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
  }
  })
  //Get API's response to confirm command
  .then(response=>response.json())
  .then(json => {
    //console.log(json)
    //Create function to get total cart price
    function getTotal() {
      var sum = 0
      for (let price of json.products){
        let itemPrice= price.price;
        sum+= parseFloat(itemPrice/100)
      }
      return sum
    }

    //Get information for confirm page command
    let totalPrice = getTotal()
    let orderId = json.orderId

    //redirect customer to confirm command page and put information on URL to get it from confirm command js page
    window.location.replace (`confirmation.html?order=${orderId}&price=${totalPrice}`)
  })
  .catch(error => {
    console.log("Une erreur s'est produite dans l'affichage des éléments: " +error)
  })
}