function getId(infos) {
  for (let product of infos){
      id = product.idProduct;
  }
  return id;
}

function getProductId() {
  let productsId =[];
  for (var i = 0; i < localStorage.length; i++) {
      let itemName=localStorage.key(i);
    
      const itemsInfos = JSON.parse(localStorage.getItem(`${itemName}`));
      console.log(itemsInfos)

      productsId.push(getId(itemsInfos));
    }
    return productsId;
}

let firstNameInput = document.getElementById("firstName")
let lastNameInput = document.getElementById("lastName")
let mailInput = document.getElementById("mail")
let addressInput = document.getElementById("address")
let cityInput = document.getElementById("city")

function validate() {
  let checkfirstName = firstNameInput.checkValidity()
  let checklastName = lastNameInput.checkValidity()
  let checkmail = mailInput.checkValidity()
  let checkaddress = addressInput.checkValidity()
  let checkcity = cityInput.checkValidity()

  console.log(checkfirstName, checklastName, checkmail, checkaddress, checkcity)

  let firstName = firstNameInput.value
  let lastName = lastNameInput.value
  let email = mailInput.value
  let address = addressInput.value
  let city = cityInput.value

  if (checkfirstName == true && checklastName == true && checkmail== true && checkaddress == true && checkcity == true){
    return {firstName, lastName, email, address, city}
  }
}

function sendData() {
  let form = validate()
  console.log(form)

  if (!form){
    return
  }

  let idProduct = getProductId();
  console.log (idProduct)


  fetch("http://localhost:3000/api/teddies/order", {
    method: "POST",

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

  .then(response=>response.json())
  .then(json => {
    console.log(json)
    function getTotal(price) {
      var sum = 0
      for (let price of json.products){
        let itemPrice= price.price;
        sum+= parseFloat(itemPrice/100)
      }
      return sum
    }

    let totalPrice = getTotal()
    console.log(totalPrice)

    let orderId = json.orderId
    console.log(orderId)

    //let urlInfos = {orderId, totalPrice}
    window.location.replace ("confirmation.html?order="+orderId +totalPrice)
  })
}